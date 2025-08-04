import MainPages from "./index";
import { AlertHandlerProvider } from "../../contexts/alert_handler";
import  AlertManager  from "../../Organisms/AlertManager/index";

export default { component: MainPages };
const Template = (args) => <MainPages {...args} />;
export const Default = Template.bind({});
Default.args = {};

Default.decorators = [
  (Story) => (
    <div>
      <AlertHandlerProvider>
        <AlertManager />
        <Story />
      </AlertHandlerProvider>
    </div>
  ),
];
