import React, { Component } from "react";

class CreateContent extends Component {
    render() {
        console.log("Conetent render");
        return (
            <article>
                <h2>Content</h2>
                <form
                    id="create-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value,
                        );
                    }}
                    action="/create_process"
                    method="post"
                >
                    <p>
                        <input type="text" name="title" placeholder="title" />
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="description"
                            form="create-form"
                        ></textarea>
                    </p>
                    <p>
                        <input type="submit" value="등록" />
                    </p>
                </form>
            </article>
        );
    }
}

export default CreateContent;
