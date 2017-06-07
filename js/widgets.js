    $(function() {
      $('#github-commits').githubInfoWidget(
           { user: 'necto', repo: 'vnds', branch: 'master', last: 7,
             limitMessageTo: 80, avatarSize: 35});
    });
