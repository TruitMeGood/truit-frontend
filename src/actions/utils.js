export function filterGeos(places) {
    return places.filter(place => place.city !== '' && place.country !== '')
}