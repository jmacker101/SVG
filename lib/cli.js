const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
//require fs and inquirer packages
// i beleive i have installed both correctly
// fs.PromptModuleWriteFile

//require svg file

//have inquirer.ppromt to ask questions about share , text and colors
// from line 13 to line 28 is suppose to help with the questions, share, text, and colors?
// need to ask for help on if i am doing this right still?
// this is the entire code that vs code gave me to help explain it to me.
// let inquirer.prompt: PromptModule
// <{
//     prototype: Circle;
// }>(questions: QuestionCollection<{
//     prototype: Circle;
// }>, initialAnswers?: Partial<{
//     prototype: Circle;
// }> | undefined) => Promise<...> & {
//     ...;
// } (+1 overload)
class CLI {
    run() {
        return inquirer.prompt([
            { name: 'shape', type: "list", message: 'select shape', choices: ['circle', 'square', 'triangle'] },
        ])
            .then((shape) => {[
                Text(name='shape', message='select shape'),
                Text(name='surname', message="What's your surname, {name}")
            ]
            questions = [{
                
            }
        ]
                //within .then have switch statement to check which shape user selected and call that constructor with keywork "new"
                // helps me build and remember how to do a .switch statement
                switch (shape) {
                    case 'circle':
                        console.log('circle')
                        break;
                    case 'triangle':
                        console.log('triangle')
                        break;

                    // the break was a place holder for the .switch statement

                    default:
                        console.log('square')
                        break;
                }
                  //write the shape HTML code into logo.svg file using fs.writeFile
            
            }
          
            )
            .catch((err) => {console.log(err)})



    }
}

module.exports = CLI

