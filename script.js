import { createClient } from '@supabase/supabase'

const supabaseUrl = 'https://nbrrtdtyjgmsnskmcpmj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5icnJ0ZHR5amdtc25za21jcG1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc2MDA2NTcsImV4cCI6MjAwMzE3NjY1N30.K7942SOt9D_84A6NK6Eo-Z1nfiPIAS9xO7tW9OqWovY'

const supabase = createClient(supabaseUrl, supabaseKey)

// Example query
const { data, error } = await supabase
.from('messages')   
.select('*')

console.log(data)
