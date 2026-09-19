const supabaseClient = supabase.createClient('https://lcyboumcokkwtaihvnox.supabase.co', 'sb_publishable_u6CrbHQYoheiiJjYvgUb4Q_vlT_zyH1');

(async function() {
    
    const {data: {session}} = await supabaseClient.auth.getSession();

    if(!session) {window.location.href = "user.html";}

})();

