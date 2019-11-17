const schools = [
	{
		id: 1,
		name: 'Federal University Of Technology, Owerri(FUTO)',
		mission: '',
		motto: 'Technology for service',
		faculties: [],
		type: 'federal',
		institution_type: '',
		nickname: 'FUTO',
		established: 1980,
		founder: '',
		campus: 'urban',
		description: '',
		website: '',
		logo: '',
		location: 'Owerri',
		state: 'Imo',
		mascot: '',
		colors: '',
		school_head: '',
		latitude: '',
		longitude: '',
		email: '',
		telephone: '',
		po_box: '',
		school_photos: [],
		created_at: new Date(),
		updated_at: new Date(),
		comments: 2000,
		likes: 14,
		views: 45
	}
];

const users = [
	{
		firstname: '',
		school: 'Federal University of Technology, Owerri',
		role: 'admin'
	}
];

const faculties = [
	{
		id: 1,
		name: 'school of management technology, SMAT',
		departmentCounts: 0,
		department: [ 'Information Technology' ],
		dean: '',
		schoolId: 1
	}
];

const departments = [
	{
		id: 1,
		name: 'Information Management Technology',
		faculty: 'SMAT',
		hod: 'Amaobi Uwaleke',
		accredited: true,
		utme_cut_off: 234,
		facultyId: 1
	}
];

const comments = [
	{
		id: 1,
		schoolId: 1,
		body: 'lets get it started',
		author: 'wiz'
	}
];
