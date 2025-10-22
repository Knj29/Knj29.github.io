const indexManager = {
    init() {
        this.functions();
        this.listeners();
    },

    functions() {
        new DiscordProfile({
            card: '#grek_iqUtc8',
            avatar: '#grek_iral7L',
            status: {
                indicator: '#grek_dNeUGv',
                text: '#grek_g6F0rZ'
            },
            username: '#grek_YJkflM',
        })

        const playlist = [
            {
                src: './homepage/mp3/1.mp3',
                title: 'NA ZAWSZE MALOLAT',
                artist: 'oki',
                album: 'whiplash / cliche',
                cover: './homepage/images/1.mp3.jpg',
                link: 'https://music.apple.com/us/album/cliche/1697377154?i=1697377401'
            },
            {
                src: 'https://grek.me/assets/mp3/trauma.mp3',
                title: 'trauma',
                artist: '2hollis',
                album: 'trauma - Single',
                cover: 'https://lastfm.freetls.fastly.net/i/u/500x500/0da592094fd7bdc8c6eeaf7abb3e245e.jpg',
                link: 'https://music.apple.com/us/album/trauma/1757893006?i=1757893169'
            },
            {
                src: 'https://grek.me/assets/mp3/thx.mp3',
                title: 'THX',
                artist: 'Ken Carson',
                album: 'MORE CHAOS',
                cover: 'https://lastfm.freetls.fastly.net/i/u/770x0/a31caf3cb3151e5320ac4f5c1e946f70.jpg',
                link: 'https://music.apple.com/me/album/thx/1806780313?i=1806780672'
            },
            {
                src: 'https://grek.me/assets/mp3/crank.mp3',
                title: 'CRANK',
                artist: 'Playboi Carti',
                album: 'MUSIC',
                cover: 'https://lastfm.freetls.fastly.net/i/u/500x500/ab1f413532a1dfeda3ad32162db76914.jpg',
                link: 'https://music.apple.com/me/album/crank/1804427542?i=1804427567'
            }
        ];

        new AudioPlayer({
            audio: '#grek_g0cNvD',
            details: {
                cover: '#grek_4lt53l',
                title: '#grek_a6e3Yk',
                artist: '#grek_haRIJ9'
            },
            controls: {
                backward: '#grek_OmLgHD',
                play: '#grek_f25i3N',
                forward: '#grek_xPy4zo'
            },
            timebar: {
                blank: '#grek_ELrtrl',
                fill: '#grek_FvcfT1'
            },
            playlist: playlist
        });
    },

    listeners() {
        $('#grek_roxAlG').on('click', function () {
            let i = $(this).find('i');
            let html = $('html');
            switch (html.attr('data-mode')) {
                case 'dark':
                    html.attr('data-mode', 'light');
                    i.removeClass('fa-sun-bright').addClass('fa-moon');
                    break;
                case 'light':
                    html.attr('data-mode', 'dark');
                    i.removeClass('fa-sun-bright').addClass('fa-moon');
                    break;
                default:
                    html.attr('data-mode', 'dark');
                    i.removeClass('fa-moon').addClass('fa-sun-bright');
                    break;
            }
        });        
    }
}
