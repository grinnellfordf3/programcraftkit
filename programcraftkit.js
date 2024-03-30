// Create a class named ProgramCraftKit
class ProgramCraftKit {
    constructor() {
        this.components = [];
    }

    // Method: add a component to the ProgramCraftKit
    addComponent(component) {
        this.components.push(component);
        console.log(`Added ${component} to the ProgramCraftKit.`);
    }

    // Method: remove a component from the ProgramCraftKit
    removeComponent(component) {
        const index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
            console.log(`Removed ${component} from the ProgramCraftKit.`);
        } else {
            console.log(`${component} is not found in the ProgramCraftKit.`);
        }
    }

    // Method: list all components in the ProgramCraftKit
    listComponents() {
        console.log("Components in the ProgramCraftKit:");
        this.components.forEach(component => {
            console.log(component);
        });
    }
}

// Create an instance of ProgramCraftKit named myProgramCraftKit
const myProgramCraftKit = new ProgramCraftKit();

// Add components to the ProgramCraftKit
myProgramCraftKit.addComponent("Database");
myProgramCraftKit.addComponent("UI Library");
myProgramCraftKit.addComponent("Testing Framework");

// List all components in the ProgramCraftKit
myProgramCraftKit.listComponents();

// Remove a component from the ProgramCraftKit
myProgramCraftKit.removeComponent("UI Library");

// List all components in the ProgramCraftKit after removal
myProgramCraftKit.listComponents();
