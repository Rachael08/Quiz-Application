const express = require("express");
const { connectDataBase } = require("./database/db");
const methodOverride = require('method-override');
const { postModel } = require("./models/postModel");
const { userAnswerModel } = require("./models/userAnswerModel");
const app = express();

const port = 5000;


app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));



app.get('/', async (req, res) => {
    try {
        res.status(200).render('home', { title: "Homepage" });
    } catch (error) {
        console.log(error.message);
    }
});

app.get('/post-question', async (req, res) => {
    try {
        res.status(200).render('post', { title: "Post Questions" });
    } catch (error) {
        console.log(error.message);
    }
});

app.get('/solve-question', async (req, res) => {
    try {
        const posts = await postModel.find();
        // console.log(posts);
        res.status(200).render('solve', { title: "Solve Questions", posts });
    } catch (error) {
        console.log(error.message);
    }
});



app.post('/post-question', async (req, res) => {
    try {
        const { head1, body1A, body1B, body1C, body1D, ans1, head2, body2A, body2B, body2C, body2D, ans2, head3, body3A, body3B, body3C, body3D, ans3, head4, body4A, body4B, body4C, body4D, ans4, head5, body5A, body5B, body5C, body5D, ans5, } = req.body
        // console.log(req.body);
        const newPost = new postModel({
            question1: head1,
            Option1A: body1A,
            Option1B: body1B,
            Option1C: body1C,
            Option1D: body1D,
            Answer1: ans1,
            question2: head2,
            Option2A: body2A,
            Option2B: body2B,
            Option2C: body2C,
            Option2D: body2D,
            Answer2: ans2,
            question3: head3,
            Option3A: body3A,
            Option3B: body3B,
            Option3C: body3C,
            Option3D: body3D,
            Answer3: ans3,
            question4: head4,
            Option4A: body4A,
            Option4B: body4B,
            Option4C: body4C,
            Option4D: body4D,
            Answer4: ans4,
            question5: head5,
            Option5A: body5A,
            Option5B: body5B,
            Option5C: body5C,
            Option5D: body5D,
            Answer5: ans5,
        });


        const savedPost = await newPost.save();
        // console.log(savedPost);
        res.status(201).redirect('/solve-question');
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
});

app.get('/submit-quiz', async (req, res) => {
    try {
        const { opt1, opt2, opt3, opt4, opt5, ans1, ans2, ans3, ans4, ans5 } = req.body;
        const userAnswer = new userAnswerModel({
            selectedOpt1: opt1,
            selectedOpt2: opt2,
            selectedOpt3: opt3,
            selectedOpt4: opt4,
            selectedOpt5: opt5,
        });
        const savedUserAnswer = await userAnswer.save();
        // console.log(savedUserAnswer);

        const correctAnswer = new postModel({
            Answer1: ans1,
            Answer2: ans2,
            Answer3: ans3,
            Answer4: ans4,
            Answer5: ans5
        });

        const savedCorrectAnswer = await correctAnswer.save();
        // console.log(savedCorrectAnswer);


        
        let count = 0;
        for (let i = 0; i < savedUserAnswer.length; i++) {
            if (savedUserAnswer[i] == savedCorrectAnswer[i]) {
                count++
            }
        };

        // const score = count;

        // const data = req.body;
        const newAns = savedUserAnswer;
        const oldAns = savedCorrectAnswer;
        // console.log(newAns);
        // const allQuestions = await postModel.find();
        // const question = allQuestions
        // let ans = [];
        // let x = Object.values(question);
        // for (item of x) {
        //     if (item.includes('Option')) {
        //         ans.push(item)
        //     }
        // };


        

        res.status(200).redirect('/quiz-result').render({score});

    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success: false,
            message: error.message
        });
    };


});


app.get('/quiz-result', async (req, res) => {
    try {

        res.status(200).render('results', {title: "Quiz Result"})
    } catch (error) {
        console.log(error.message);
    }
})






app.get('*', async (req, res) => {
    try {
        res.status(404).render('error');
    } catch (error) {
        console.log(error.message);
    }
});







(async function () {

    await connectDataBase();
    app.listen(port, () => console.log(`server running on localhost port: ${port}`));

})();