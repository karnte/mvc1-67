const { getCowOrGoatById } = require('../models/cowModel');
const { milkCow, restoreUdder } = require('../models/udderAdjustmentModel');

// Controller: Process cow or goat ID
const checkCowOrGoat = (req, res) => {
    const { id } = req.body;

     // Validate the ID format
     if (!/^[1-9]\d{7}$/.test(id)) {
        return res.send('ID must be an 8-digit number and not start with 0');
    }

    // Retrieve data from the Model
    getCowOrGoatById(id, (err, cowOrGoat) => {
        if (err) {
            return res.send('Error fetching data from the database');
        }

        if (!cowOrGoat) {
            return res.send('No cow or goat found with this ID');
        }

        if (cowOrGoat.udder_count === null) {
            return res.redirect('/goat');
        } else {
            // Process the cow
            if (cowOrGoat.udder_count === 4) {
                milkCow(cowOrGoat, (err, updatedCow) => {
                    if (err) {
                        return res.send('Error updating cow udder count');
                    }
                    const milkProduced = cowOrGoat.age_years + cowOrGoat.age_months;
                    res.render('cow', { cow: updatedCow, milkProduced: milkProduced.toFixed(2) });
                });
            } else if (cowOrGoat.udder_count === 3) {
                restoreUdder(cowOrGoat, (err, updatedCow) => {
                    if (err) {
                        return res.send('Error restoring udder');
                    }
                    res.render('cow', { cow: updatedCow, milkProduced: 0 });
                });
            } else {
                return res.send('This cow cannot be milked');
            }
        }
    });
};

module.exports = { checkCowOrGoat };
