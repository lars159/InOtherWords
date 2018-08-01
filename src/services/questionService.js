window.questions = [{src : "woman"}, {src : "student"}, {src : "country"},
{src : "hand"},
{src : "water"},
{src : "money"},
{src : "eye"},
{src : "job"},
{src : "head"},
{src : "father"},
{src : "car"},
{src : "office"},
{src : "door"},
{src : "girl"},
{src : "guy"},
{src : "phone"},
{src : "supermarket"},
{src : "apple"},
{src : "beer"},
{src : "hat"},
{src : "pizza"},
{src : "rock"},
{src : "salt"},
{src : "wind"},
{src : "ticket"},
{src : "milk"},
{src : "peace"},
{src : "station"},
{src : "chemical"},
{src : "yellow"} ]; 

export default class QuestionsService {
    next(){
        let q = window.questions[Math.floor(Math.random()*window.questions.length)]
        return {src : q.src, result : false};
    }
}
 