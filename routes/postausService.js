
const getPosts = (cb) => {
    pool.query('SELECT * from posts ORDER BY post_id', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}

const getPost = (post_id, cb) => {
    pool.query('SELECT * FROM posts WHERE post_id=$1', [post_id], (err, results) => {
        if (err) throw err;
        console.dir(results.rows);
        cb(results.rows);
    })
}

const insertPost = (newpost, cb) => {
    const { post_nametag, post_content } = newpost;
    pool.query('INSERT INTO posts (post_nametag, post_content) VALUES ($1, $2)', [post_nametag, post_content], (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rowCount);
    })
}

// const updatePost = (post, post_id, cb) => {
//     const { post_nametag, post_content } = post;
//     pool.query('UPDATE posts SET post_nametag=$1, post_content=$2 WHERE post_id=$3', [post_nametag, post_content, post_id], (err, results) => {
//         if (err) throw err;
//         console.dir(results);
//         cb(results.rowCount);
//     })
// }
// const deletePost = (post_id, cb) => {
//     pool.query('DELETE FROM posts WHERE post_id=$1', [post_id], (err, results) => {
//         if (err) throw err;
//         console.dir(results);
//         cb(results.rowCount);
//     })
// }


module.exports = { getPosts, getPost }
//insertPost, updatePost, deletePost
