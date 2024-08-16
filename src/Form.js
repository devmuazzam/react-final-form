
import { Field, Form } from "react-final-form"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function From(){

    const onSubmit = values => {
        console.log(values)
      }

    return <>
        <Form onSubmit={onSubmit} initialValues={{username: "Save", password: ""}} render={
            ({handleSubmit, form, submitting, pristine, values}) => {
                return <form>
                    <div>
                        <label htmlFor="username"> Username:</label>
                        <Field component="input" type="text" name="username" placeholder="Enter username" />
                    </div>
                    <div>
                        <label htmlFor="password"> Password:</label>
                        <Field component="input" type="password" name="password" placeholder="Enter Password" />
                    </div>
                    <button type="submit" onClick={handleSubmit} disabled={pristine || submitting}> Submit </button>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            }
        } >

        </Form>
    </>
}