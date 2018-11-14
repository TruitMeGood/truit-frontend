export function filterGeos(places) {
    return places.filter(place => place.city !== '' && place.country !== '' && place.place_count > 0)
}