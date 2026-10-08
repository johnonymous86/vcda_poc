const supabaseClient = supabase.createClient('https://lcyboumcokkwtaihvnox.supabase.co', 'sb_publishable_u6CrbHQYoheiiJjYvgUb4Q_vlT_zyH1');

async function loadRooms() {
    const { data, error } = await supabaseClient.from('rooms').select().eq('building', 'Smyth');

    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
}
loadRooms();