module.exports = [
"[project]/src/lib/supabase/client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "isSupabaseConfigured",
    ()=>isSupabaseConfigured,
    "mockEvents",
    ()=>mockEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-rsc] (ecmascript)");
;
const mockEvents = [
    {
        id: "1",
        name: "Sunday Tennis Practice",
        type: "Tennis",
        time: "2026-03-08T19:00",
        description: "Join us for a fun evening of tennis practice!",
        venues: [
            "Reedy Creek Park Court #1"
        ]
    },
    {
        id: "2",
        name: "Basketball Tournament",
        type: "Basketball",
        time: "2026-03-10T18:00",
        description: "3v3 basketball tournament for all skill levels",
        venues: [
            "Community Center Court"
        ]
    }
];
function isSupabaseConfigured() {
    return !!(("TURBOPACK compile-time value", "https://ntclltmzfsrrzbygqpwl.supabase.co") && ("TURBOPACK compile-time value", "sb_publishable_DF2nWY2NPHnkpeeFFkgQOw__uyMOFet"));
}
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://ntclltmzfsrrzbygqpwl.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_DF2nWY2NPHnkpeeFFkgQOw__uyMOFet"));
}
}),
"[project]/src/app/actions/events.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"000eba917d230547ed8eacf1dc37afd8a13d7b380b":"getUpcomingEvents","401e5f0748b8d080e8e8e00123a271f109f48ab2e6":"createEvent","4020f772ea90e2693530bd131a93a350c5b8f4bb79":"getEvents","4027c03e82bccbe875bd57e23cf767f0863fd50b8f":"getEventById","404e2f3de0e002da75c30e7ba831b230a67b139361":"deleteEvent","607bb62043108e8350a639e22fff49747fa39186c4":"updateEvent"},"",""] */ __turbopack_context__.s([
    "createEvent",
    ()=>createEvent,
    "deleteEvent",
    ()=>deleteEvent,
    "getEventById",
    ()=>getEventById,
    "getEvents",
    ()=>getEvents,
    "getUpcomingEvents",
    ()=>getUpcomingEvents,
    "updateEvent",
    ()=>updateEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
// In-memory mock events for development
const devEvents = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockEvents"]
];
async function createEvent(event) {
    // Use mock data mode if Supabase is not configured
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        console.log("📦 Using mock data mode for createEvent");
        const newEvent = {
            ...event,
            id: Math.random().toString(36).substring(2, 9)
        };
        devEvents.push(newEvent);
        return newEvent;
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // Get the current user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
        throw new Error("Unauthorized: You must be logged in to create an event");
    }
    // Insert the event into the database
    const { data, error } = await supabase.from("events").insert({
        name: event.name,
        type: event.type,
        time: event.time,
        description: event.description,
        venues: event.venues,
        created_by: user.id
    }).select().single();
    if (error) {
        console.error("Error creating event:", error);
        throw new Error(`Failed to create event: ${error.message}`);
    }
    return data;
}
async function getEvents(filters) {
    // Use mock data mode if Supabase is not configured
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        console.log("📦 Using mock data mode for getEvents");
        let filtered = [
            ...devEvents
        ];
        if (filters?.name) {
            const searchTerm = filters.name.toLowerCase();
            filtered = filtered.filter((e)=>e.name.toLowerCase().includes(searchTerm));
        }
        if (filters?.type) {
            filtered = filtered.filter((e)=>e.type === filters.type);
        }
        return filtered;
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    let query = supabase.from("events").select("*").order("time", {
        ascending: true
    });
    // Apply name filter (case-insensitive search)
    if (filters?.name) {
        query = query.ilike("name", `%${filters.name}%`);
    }
    // Apply sport type filter
    if (filters?.type) {
        query = query.eq("type", filters.type);
    }
    const { data, error } = await query;
    if (error) {
        console.error("Error fetching events:", error);
        throw new Error(`Failed to fetch events: ${error.message}`);
    }
    return data || [];
}
async function getEventById(id) {
    // Use mock data mode if Supabase is not configured
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        console.log("📦 Using mock data mode for getEventById");
        return devEvents.find((e)=>e.id === id) || null;
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from("events").select("*").eq("id", id).single();
    if (error) {
        if (error.code === "PGRST116") {
            // No rows returned
            return null;
        }
        console.error("Error fetching event:", error);
        throw new Error(`Failed to fetch event: ${error.message}`);
    }
    return data;
}
async function updateEvent(id, event) {
    // Use mock data mode if Supabase is not configured
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        console.log("📦 Using mock data mode for updateEvent");
        const index = devEvents.findIndex((e)=>e.id === id);
        if (index === -1) {
            throw new Error("Event not found");
        }
        devEvents[index] = {
            ...devEvents[index],
            ...event
        };
        return devEvents[index];
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // Get the current user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
        throw new Error("Unauthorized: You must be logged in to update an event");
    }
    // Verify the user owns this event
    const { data: existingEvent, error: fetchError } = await supabase.from("events").select("created_by").eq("id", id).single();
    if (fetchError) {
        throw new Error("Event not found");
    }
    // Check if user is the creator
    if (existingEvent.created_by !== user.id) {
        throw new Error("Forbidden: You can only edit events you created");
    }
    // Update the event
    const { data, error } = await supabase.from("events").update({
        name: event.name,
        type: event.type,
        time: event.time,
        description: event.description,
        venues: event.venues,
        updated_at: new Date().toISOString()
    }).eq("id", id).select().single();
    if (error) {
        console.error("Error updating event:", error);
        throw new Error(`Failed to update event: ${error.message}`);
    }
    return data;
}
async function deleteEvent(id) {
    // Use mock data mode if Supabase is not configured
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        console.log("📦 Using mock data mode for deleteEvent");
        const index = devEvents.findIndex((e)=>e.id === id);
        if (index !== -1) {
            devEvents.splice(index, 1);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard");
        return;
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // Get the current user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
        throw new Error("Unauthorized: You must be logged in to delete an event");
    }
    // Verify the user owns this event
    const { data: existingEvent, error: fetchError } = await supabase.from("events").select("created_by").eq("id", id).single();
    if (fetchError) {
        throw new Error("Event not found");
    }
    // Check if user is the creator
    if (existingEvent.created_by !== user.id) {
        throw new Error("Forbidden: You can only delete events you created");
    }
    // Delete the event
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) {
        console.error("Error deleting event:", error);
        throw new Error(`Failed to delete event: ${error.message}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard");
}
async function getUpcomingEvents() {
    // Use mock data mode if Supabase is not configured
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        console.log("📦 Using mock data mode for getUpcomingEvents");
        const now = new Date();
        const oneWeekFromNow = new Date(now);
        oneWeekFromNow.setDate(now.getDate() + 7);
        return devEvents.filter((event)=>{
            const eventTime = new Date(event.time);
            return eventTime >= now && eventTime <= oneWeekFromNow;
        });
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const now = new Date().toISOString();
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
    const { data, error } = await supabase.from("events").select("*").gte("time", now).lte("time", oneWeekFromNow.toISOString()).order("time", {
        ascending: true
    });
    if (error) {
        console.error("Error fetching upcoming events:", error);
        throw new Error(`Failed to fetch upcoming events: ${error.message}`);
    }
    return data || [];
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent,
    getUpcomingEvents
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEvent, "401e5f0748b8d080e8e8e00123a271f109f48ab2e6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEvents, "4020f772ea90e2693530bd131a93a350c5b8f4bb79", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEventById, "4027c03e82bccbe875bd57e23cf767f0863fd50b8f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEvent, "607bb62043108e8350a639e22fff49747fa39186c4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEvent, "404e2f3de0e002da75c30e7ba831b230a67b139361", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUpcomingEvents, "000eba917d230547ed8eacf1dc37afd8a13d7b380b", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/events.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/events.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/events.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000eba917d230547ed8eacf1dc37afd8a13d7b380b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUpcomingEvents"],
    "005334a24fb31c2d4ad71563cf3deee45950a6f63c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "00e5218602d875dddefa1a82c33182d89cefdc38b7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"],
    "401e5f0748b8d080e8e8e00123a271f109f48ab2e6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEvent"],
    "4020f772ea90e2693530bd131a93a350c5b8f4bb79",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEvents"],
    "4027c03e82bccbe875bd57e23cf767f0863fd50b8f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventById"],
    "404e2f3de0e002da75c30e7ba831b230a67b139361",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEvent"],
    "40535582dc7af694f8f8d3681e6ddf61edabeb028a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"],
    "408ebfd270c11f426a0642850c815ec30fce7c1f29",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signUp"],
    "607bb62043108e8350a639e22fff49747fa39186c4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEvent"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/actions/events.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/events.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_c9aa9d25._.js.map