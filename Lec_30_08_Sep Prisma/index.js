import express from 'express'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client';
const app = express();
const prisma = new PrismaClient()
const PORT = process.env.PORT;

dotenv.config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//====================USER ROUTES===================
// get user profile 
app.get('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const dd = await prisma.user.findFirst({
            where: { id: Number(userId) },
            include: {
                posts: true
            }
        })
        res.json(dd)
    } catch (error) {
        console.log('error in get user profile', error)
    }
});
// get all users 
app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                _count: {
                    select: { posts: true },
                },
            },
        })
        res.json(users)
    } catch (error) {
        console.log('error in getUsers', error)
    }
});
// create user 
app.post('/user', async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await prisma.user.create({
            data: { name, email }
        })
        res.json({ success: true, message: 'user created!', user })
    } catch (error) {
        console.log('error in getUsers', error)
    }
});

//====================POSTS ROUTES===================
// get all posts 
app.get('/posts', async (req, res) => {
    try {
        const dd = await prisma.post.findMany()
        res.json(dd)
    } catch (error) {
        console.log('error in get all posts', error)
    }
});
// get single post 
app.get('/post/:id', async (req, res) => {
    try {
        const postId = req.params.id
        const dd = await prisma.post.findFirst({
            where: { id: Number(postId) },
            include: {
                author: {
                    select: { name: true, email: true }
                }
            },
        })
        res.json(dd)
    } catch (error) {
        console.log('error in get post', error)
    }
});
// create post 
app.post('/post', async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const post = await prisma.post.create({
            data: { title, content, authorId: Number(author) }
        })
        res.json({ success: true, message: 'post created!', post })
    } catch (error) {
        console.log('error in create post', error)
    }
});
//Update post
app.put('/post/:id', async (req, res) => {
    try {
        const updatedPost = await prisma.post.update({
            where: {
                id: Number(req.params.id),
            },
            data: req.body,
        })
        res.json(updatedPost)
    } catch (error) {
        console.log('erro in updating post', error)
    }
})
//delete post
app.delete('/post/:id', async (req, res) => {
    try {
        const deletedPost = await prisma.post.delete({
            where: {
                id: Number(req.params.id),
            }
        })
        res.json(deletedPost)
    } catch (error) {
        console.log('erro in updating post', error)
    }
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
