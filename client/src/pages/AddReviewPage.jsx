import ReviewForm from "../components/ReviewForm"
export default function AddReviewPage() {
    return (
        <div>
            <h2>Add a new review</h2>

            <p>This is a page about adding a new review to our databse</p>

            <ReviewForm />
        </div>
    )
}

async function handleSubmit(e) {
    e.preventDefault() 
    const res = await fetch(`http://localhost:8080/reviews`, {
        headers : {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(e)
    })

    // check db to see if inserted
}