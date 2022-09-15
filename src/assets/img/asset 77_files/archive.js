// 無限スクロール
$(function () {
  var infScroll = new InfiniteScroll('.archive_post_block', { // 記事を挿入していく要素を指定
    append: '.archive_post_liset_block',             // 各記事の要素
    path: '.next_posts_link a',  // 次のページへのリンク要素を指定
    hideNav: '.next_posts_link', // 指定要素を非表示にする（ここは無くてもOK）
    button: '.view-more-button', // 記事を読み込むトリガーとなる要素を指定
    scrollThreshold: false,      // スクロールで読み込む：falseで機能停止（デフォルトはtrue）
    status: '.page-load-status', // ステータス部分の要素を指定
    history: 'false'             // falseで履歴に残さない
  });
});
// 検索結果 無限スクロール 各投稿タイプ事
$(function () {
  var infScroll__travelers = new InfiniteScroll('#archive_post_block__travelers', { // 記事を挿入していく要素を指定
    append: '.archive_post_liset_block__travelers',             // 各記事の要素
    path: '#next_posts_link__travelers a',  // 次のページへのリンク要素を指定
    hideNav: '#next_posts_link__travelers', // 指定要素を非表示にする（ここは無くてもOK）
    button: '#view-more-button__travelers', // 記事を読み込むトリガーとなる要素を指定
    scrollThreshold: false,      // スクロールで読み込む：falseで機能停止（デフォルトはtrue）
    status: '#page-load-status__travelers', // ステータス部分の要素を指定
    history: 'false'             // falseで履歴に残さない
  });
});
$(function () {
  var infScroll__initiative = new InfiniteScroll('#archive_post_block__initiative', { // 記事を挿入していく要素を指定
    append: '.archive_post_liset_block__initiative',             // 各記事の要素
    path: '#next_posts_link__initiative a',  // 次のページへのリンク要素を指定
    hideNav: '#next_posts_link__initiative', // 指定要素を非表示にする（ここは無くてもOK）
    button: '#view-more-button__initiative', // 記事を読み込むトリガーとなる要素を指定
    scrollThreshold: false,      // スクロールで読み込む：falseで機能停止（デフォルトはtrue）
    status: '#page-load-status__initiative', // ステータス部分の要素を指定
    history: 'false'             // falseで履歴に残さない
  });
});
$(function () {
  var infScroll__video = new InfiniteScroll('#archive_post_block__video', { // 記事を挿入していく要素を指定
    append: '.archive_post_liset_block__video',             // 各記事の要素
    path: '#next_posts_link__video a',  // 次のページへのリンク要素を指定
    hideNav: '#next_posts_link__video', // 指定要素を非表示にする（ここは無くてもOK）
    button: '#view-more-button__video', // 記事を読み込むトリガーとなる要素を指定
    scrollThreshold: false,      // スクロールで読み込む：falseで機能停止（デフォルトはtrue）
    status: '#page-load-status__video', // ステータス部分の要素を指定
    history: 'false'             // falseで履歴に残さない
  });
});
$(function () {
  var infScroll__community = new InfiniteScroll('#archive_post_block__community', { // 記事を挿入していく要素を指定
    append: '.archive_post_liset_block__community',             // 各記事の要素
    path: '#next_posts_link__community a',  // 次のページへのリンク要素を指定
    hideNav: '#next_posts_link__community', // 指定要素を非表示にする（ここは無くてもOK）
    button: '#view-more-button__community', // 記事を読み込むトリガーとなる要素を指定
    scrollThreshold: false,      // スクロールで読み込む：falseで機能停止（デフォルトはtrue）
    status: '#page-load-status__community', // ステータス部分の要素を指定
    history: 'false'             // falseで履歴に残さない
  });
});
/*
$(function () {
  var infScroll__feature = new InfiniteScroll('#archive_post_block__feature', { // 記事を挿入していく要素を指定
    append: '.archive_post_liset_block__feature',             // 各記事の要素
    path: '#next_posts_link__feature a',  // 次のページへのリンク要素を指定
    hideNav: '#next_posts_link__feature', // 指定要素を非表示にする（ここは無くてもOK）
    button: '#view-more-button__feature', // 記事を読み込むトリガーとなる要素を指定
    scrollThreshold: false,      // スクロールで読み込む：falseで機能停止（デフォルトはtrue）
    status: '#page-load-status__feature', // ステータス部分の要素を指定
    history: 'false'             // falseで履歴に残さない
  });
});
 */
