//import applicationSchema
const applications = require('../Models/applicationSchema')

//add application 

exports.addApplication = async(req,res)=>{

    console.log('Inside Add Application Request');
    const userId = req.payload
    try {
        console.log('Inside Add Application Request');
        const userId = req.payload; // Assuming req.payload contains the user ID
    
        // Extract form data from the request body
        const { company, position, status, date } = req.body;
    
        // Create a new application document
        const newApplication = new applications({
          company,
          position,
          status,
          date,
          userId
        });

    
        // Save the application to the database
        await newApplication.save();
/*         res.status(200).json(newApplication)
 */        console.log(newApplication);
    
        res.status(200).json({ message: 'Application added successfully' });
      } catch (error) {
        console.error('Error adding application:', error);
        res.status(400).json({ message: 'Internal Server Error' });
      }

     



}

//get userApplication

exports.getUserApplication = async(req,res)=>{
    const userId = req.payload
    try {
        const allUserApplication = await applications.find({userId})
        res.status(200).json(allUserApplication)

    } catch (err) {
        res.status(401).json('Request Failed due to ',err)
        
    }
}

//edit project

exports.editUserApplication = async(req,res)=>{
  const {id} = req.params
  const userId = req.payload
  const {company, position, status, date} = req.body

  try {
    const editList = await applications.findByIdAndUpdate({_id:id},{company,position,status,date,userId},{new:true})

    await editList.save()
    res.status(200).json(editList)

  } catch (err) {
    res.status(401).json(err)    
  }
  

}

//delete Project

exports.deleteUserApplication = async(req,res)=>{
  const {id} = req.params

  try {
    const removeList = await applications.findByIdAndDelete({_id:id})
    res.status(200).json(removeList)
  } catch (err) {
    res.status(401).json(err)
    
  }
}