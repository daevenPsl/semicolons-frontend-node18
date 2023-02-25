import { getSignedClaimForIdentity } from "../claim/signedClaimService";
import { getClaimsFromWallet } from "../contractInteractions";
import { claimToType, claimTypeToClaimId } from "../utils/mappings";
import { getClaimIssuer } from "./identityService";

export async function getClaimsForIdentity (walletAddress) {

    // 3 Types of Claims 
    const obtainedIssuers = await getClaimIssuer();
    let claimIssuerWalletAddressToName = new Map();
    for (let i =0; i<obtainedIssuers.length; i++) {
        claimIssuerWalletAddressToName.set(obtainedIssuers[i].walletAddress, obtainedIssuers[i].username)
    }


    const obtainedClaimsFromContract = await getClaimsFromWallet(
        walletAddress, claimIssuerWalletAddressToName
    );

    // Pending Claims
    const obtainClaimRequestFromAPI = await getSignedClaimForIdentity(
        walletAddress
    );



    for (let i = 0; i< obtainClaimRequestFromAPI; i++) {
        obtainedClaimsFromContract.push({
            claimType : claimToType.get(claimTypeToClaimId("KYC")),
            issuerName : claimIssuerWalletAddressToName.get(obtainClaimRequestFromAPI[i].issuerAddress)
        })
    }
    
    console.log("printing Claims Data ," , obtainedClaimsFromContract)

    return obtainedClaimsFromContract;   

}