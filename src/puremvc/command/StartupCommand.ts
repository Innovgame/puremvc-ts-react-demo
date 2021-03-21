import { MacroCommand } from 'puremvc';
import { ModelPrepCommand } from './ModelPrepCommand';
import { ViewPrepCommand } from './ViewPrepCommand';

export class StartupCommand extends MacroCommand {
    initializeMacroCommand(): void {
        this.addCommand(ModelPrepCommand);
        this.addCommand(ViewPrepCommand);
    }
}
