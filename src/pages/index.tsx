import React from "react";
import { Input, Button, Form, List } from "antd";
import Container from "../components/Container/Container";
import { useTodo } from "../stores";
import { observer } from "mobx-react-lite";
import { todoProp } from "../stores/TodoStore";
import { Store } from "antd/lib/form/interface";

const Index: React.FC = () => {
  const [form] = Form.useForm();
  const todo = useTodo();
  const handleAdd = (values: Store) => {
    const data = {
      date: `${new Date().toDateString()} - ${new Date().toLocaleTimeString()}`,
      todo: values.note,
    };
    todo.add(data);
  };
  const handleRemove = (index: number) => {
    todo.delete(index);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <Container>
      <Form
        style={{ marginTop: 40 }}
        form={form}
        name="control-hooks"
        onFinish={handleAdd}
      >
        <Form.Item
          name="note"
          label="Todo"
          rules={[{ required: true, message: "require" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>

      <List
        loading={todo.todo.isLoading()}
        size="large"
        key="list"
        header={<div>Todo</div>}
        bordered
        dataSource={todo.todo.val()}
        renderItem={(item: todoProp) => {
          return (
            <List.Item
              actions={[
                <a
                  onClick={() => {
                    handleRemove(item.index);
                  }}
                  key="list-loadmore-edit"
                >
                  remove
                </a>,
              ]}
            >
              <List.Item.Meta title={item.date} description={item.todo} />
            </List.Item>
          );
        }}
      />
    </Container>
  );
};
export default observer(Index);
