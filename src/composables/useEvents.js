import {ref, onMounted } from 'vue'
// import {fetchEvents, storeEvent, mutateEvent, destroyEvent } from '../apis/events.js'

export default function useEvents(){
    const getEvents = ref([])

    const setEvents = async () => {
        getEvents.value = await fetchEvents()
    }
    
    const createEvent = (event) => {
        // storeEvent(event)
        console.log(event);
    }

    const upadateEvent = (event, id) => {
        console.log(event, id)
    }

    const deleteEvent = (id) => {
        console.log(id)
    }

    onMounted(setEvents)
    return{
        getEvents,
        setEvents,
        createEvent,
        upadateEvent,
        deleteEvent,
    }
 }