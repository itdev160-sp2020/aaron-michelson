$(function() {
    var data = [
        {
            id: 1,
            title: 'Star Wars',
            body: 'May the Force be with you.',
            actor: 'Alec Guinness (Obi-Wan Kenobi)'
        },
        {
            id: 2,
            title: 'The Wizard of Oz',
            body: 'There\'\s no place like home.',
            actor: 'Judy Garland (Dorothy)'
        },
        {
            id: 3,
            title: 'Forrest Gump',
            body: 'My mama always said life was like a box of chocolates.  You never know what you\'\re gonna get.',
            actor: 'Tom Hanks (Forrest Gump)'
        },
        {
            id: 4,
            title: 'Jaws',
            body: 'You\'\re gonna need a bigger boat.',
            actor: 'Roy Scheider (Brody)'
        },
        {
            id: 5,
            title: 'A Few Good Men',
            body: 'You can\'\t handle the truth!.',
            actor: 'Jack Nicholson (Colonel Nathan R. Jessep)'
        }
    ];

    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts() {
        for (let i = 0, i < data.length; i++) {
            // Create elements
            var postId = 'post-' + data[i].id,
                $post = $('<section class="post"></section>'),
                $title = $('<h2 class="title"></h2>'),
                $body = $('<blockquote></blockquote>'),
                $actor = $('<span class="actor"></span>'),
                $navItem = $('<li></li>');

            // Add post data
            $title.text(data[i].title);
            $body.text(data[i].body);
            $actor.text(data[i].actor);

            // Add nav item data
            $navItem.attr('id', data[i].id)
            $navItem.text(data[i].title);

            // Combine post elements
            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($actor);

            // Add post and nav elements to page
            $posts.append($post);
            $nav.append($navItem);

            // Wire up nav item click event handler
            $navItem.on('click', function() {
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
            });

            // Hide all posts and show the intro
            $posts.childreb('.post').hide();
            $intro.fadeIn(1000);
        }
    }

    initPosts();
});








    
    
    
    
    
    
    
    
    
    