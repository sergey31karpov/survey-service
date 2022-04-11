import React from 'react';
import {useNavigate} from "react-router-dom";
import {SurveyType} from "../../../../typings/select";
import {Button, Form, Input, Select} from 'antd';
import {ROUTES} from "../../../../routes";

interface ICreateSurveyForm {

}

interface IForm {
    questionName: string
    question: string
    surveyType: { value: string, label: string }
}

enum FieldName {
    questionName = 'questionName',
    question = 'question',
    surveyType = 'surveyType'
}


export const CreateSurveyForm: React.FC<ICreateSurveyForm> = () => {
    const [, forceUpdate] = React.useState({})

    React.useEffect(() => {
        forceUpdate({})
    }, [])

    const navigate = useNavigate()

    const onSubmitQuestion = (data: IForm) => {
        console.log(`Тип опроса: ${data.surveyType}. Название вопроса: ${data.questionName}. Вопрос: ${data.question}`)
        form.resetFields()
        const pollHashCode = Date.now()
        navigate(`${ROUTES.SUCCESS}/${pollHashCode}`)
    }

    const surveyTypes = [
        {value: SurveyType.Dual, label: 'Да/нет'},
    ]

    const [form] = Form.useForm()

    const {Option} = Select

    const optionsGroup = surveyTypes.map(option => (
        <Option key={option.value} id={option.value} value={option.value}>{option.label}</Option>
    ))

    const createRules = (fieldName: string) => {
        switch (fieldName) {
            case FieldName.surveyType:
                return [
                    {
                        required: true,
                        message: 'Выберете тип'
                    }
                ]
            case FieldName.questionName:
                return [
                    {
                        required: true,
                        message: 'Введите название опроса'
                    },
                    {
                        max: 50,
                        message: 'Максимум 50 символов'
                    }
                ]
            case FieldName.question:
                return [
                    {
                        required: true,
                        message: 'Введите Ваш вопрос'
                    },
                    {
                        max: 250,
                        message: 'Максимум 250 символов'
                    }
                ]
            default:
                return []
        }
    }

    const createButton = () => {
        const disabled = !(form.isFieldTouched(FieldName.question) && form.isFieldTouched(FieldName.questionName)) ||
            !!form.getFieldsError().filter(({errors}) => errors.length).length

        return (
            <Button htmlType="submit" disabled={disabled}>Создать опрос</Button>
        )
    }

    return (
        <Form layout="vertical" form={form} onFinish={onSubmitQuestion} name='createSurvey'>
            <Form.Item
                name={FieldName.surveyType}
                label='Выберете тип опроса'
                initialValue={surveyTypes[0].value}
                rules={createRules(FieldName.surveyType)}
            >
                <Select>
                    {optionsGroup}
                </Select>
            </Form.Item>
            <Form.Item
                name={FieldName.questionName}
                label='Введите название'
                rules={createRules(FieldName.questionName)}
            >
                <Input
                    autoComplete='off'
                    allowClear
                />
            </Form.Item>
            <Form.Item
                name={FieldName.question}
                label='Введите вопрос'
                rules={createRules(FieldName.question)}
            >
                <Input
                    autoComplete='off'
                    allowClear
                />
            </Form.Item>
            <Form.Item shouldUpdate>
                {createButton}
            </Form.Item>
        </Form>
    )
}
