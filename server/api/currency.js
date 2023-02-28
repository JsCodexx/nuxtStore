export default defineEventHandler (async (event)=>{
    // handel query params
// const {name} = useQuery(event)

//     // handel post request
// const {age} = await useBody(event)

    // api call with private key

const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=X494E3s23cUoo0sUbXXbAowyNrOpRgGXCq7IPGPM')

    return data

})