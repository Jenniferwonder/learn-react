import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import ToDoStateApp from "../v-useState/ToDoStateApp";
import userEvent from "@testing-library/user-event";
describe("ToDoStateApp", () => {
	it("renders heading", () => {
		render(<ToDoStateApp />);
		expect(screen.getByRole("heading")).toBeInTheDocument();
	});
	it("should add task", async () => {
		render(<ToDoStateApp />);
		await userEvent.type(screen.getByRole("textbox"), "JS");
		await userEvent.keyboard("[Enter]");
		expect(screen.getByRole("textbox")).toHaveValue("");
		expect(screen.getByText(/JS/)).toBeInTheDocument();
		expect(screen.getAllByRole("listitem")).toHaveLength(1);
		expect(screen.getAllByRole("checkbox")).toHaveLength(1);
		expect(screen.getAllByRole("button")).toHaveLength(2);
	});
	it("should delete task", async () => {
		render(<ToDoStateApp />);
		await userEvent.type(screen.getByRole("textbox"), "JS");
		await userEvent.keyboard("[Enter]");
		await userEvent.click(screen.getByRole("button", { name: "Delete" }));
		expect(screen.queryAllByRole("listitem")).toHaveLength(0);
	});
	it("should change task", async () => {
		render(<ToDoStateApp />);
		await userEvent.type(screen.getByRole("textbox"), "JS");
		await userEvent.keyboard("[Enter]");
		expect(screen.getByRole("button", { name: "Edit" })).toBeInTheDocument();
		await userEvent.click(screen.getByRole("button", { name: "Edit" }));
		expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
		expect(screen.getByDisplayValue("JS")).toBeInTheDocument();
		await userEvent.type(screen.getByDisplayValue("JS"), "X");
		expect(screen.getByDisplayValue("JSX")).toBeInTheDocument();
		// ❌expect(screen.getAllByRole("textbox", { value: "JS" })).toBeInTheDocument();
		// ❌await userEvent.click(screen.getByRole("listitem"));

		await userEvent.click(screen.getByRole("button", { name: "Save" }));
		expect(screen.getByText("JSX")).toBeInTheDocument();
	});
});
