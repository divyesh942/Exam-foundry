import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const QuizResult = () => {
    const location = useLocation();
    const { quizQuestions } = location.state;
    const totalScores = location.state.totalScores;
    const numQuestions = quizQuestions.length;
    const percentage = Math.round((totalScores / numQuestions) * 100);

    return (
        <section className="container mt-5">
            <h3>Your Quiz Result Summary</h3>
            <hr />
            <h5 className="text-info">
                You answered {totalScores} out of {numQuestions} questions correctly.
            </h5>
            <p>Your total score is {percentage}%.</p>


			<NavLink className="btn btn-primary btn-sm" to={"/quiz-stepper"}>
								ReTake Quiz
			</NavLink>
        </section>
    );
};

export default QuizResult;
