import { getClaimIssuer } from "../identity/identityService";

export async function getIssuersWithData() {

    const allIssuers = await getClaimIssuer();
    console.log("allIssuers", allIssuers)
    return allIssuers;
}


export async function getIdentities() {

    const allIdentities = await getIdentities();
    console.log("allIdentities", allIdentities)
    return allIdentities;
}