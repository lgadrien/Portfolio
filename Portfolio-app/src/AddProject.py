import re
import requests
from datetime import datetime

file_path = 'src\\Components\\Infos\\projectData.js'
GITHUB_USERNAME = "lgadrien"  # Remplacez par votre nom d'utilisateur GitHub

def fetch_github_projects(username):
    """Récupère les projets du compte GitHub de l'utilisateur."""
    url = f"https://api.github.com/users/{username}/repos"
    response = requests.get(url)

    if response.status_code != 200:
        print(f"Erreur lors de la récupération des projets : {response.status_code}")
        return []

    repos = response.json()
    projects = []

    for repo in repos:
        # Filtrer uniquement les dépôts publics et vérifier les informations nécessaires
        if not repo["private"]:
            project = {
                "title": repo["name"],
                "description": repo["description"] or "Aucune description disponible.",
                "github": repo["html_url"],
                "last_update": repo["updated_at"][:10],  # Récupère la date sous format 'YYYY-MM-DD'
            }
            # Ajout d'un champ vide pour les technologies (à remplir manuellement si nécessaire)
            project["technologies"] = []  # Peut être rempli plus tard manuellement
            projects.append(project)

    return projects

def format_project_data(project):
    """Formatte les données du projet pour l'ajouter au fichier projectData.js."""
    formatted_technologies = ', '.join(
        [f'{{ name: "{tech["name"]}", logo: "{tech["logo"]}" }}' for tech in project["technologies"]]
    )
    
    return f"""
    {{
        title: "{project['title']}",
        description: "{project['description']}",
        technologies: [{formatted_technologies}],
        github: "{project['github']}",
        status: "En cours",
        last_update: "{project['last_update']}"
    }}
    """

def add_project_to_file(file_path, projects):
    """Ajoute les projets récupérés à la liste dans projectData.js."""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Rechercher la fin de la liste de projets dans le fichier
        project_list_end = re.search(r'\];', content)

        if project_list_end:
            # Formater tous les projets pour les ajouter dans le fichier
            new_projects = ',\n'.join([format_project_data(project) for project in projects])
            new_content = content[:project_list_end.start()] + ',\n' + new_projects + content[project_list_end.start():]

            # Écrire les modifications dans le fichier
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(new_content)

            print("Projets ajoutés avec succès.")
        else:
            print("Erreur : Impossible de trouver la fin de la liste des projets.")

    except FileNotFoundError:
        print(f"Erreur : Le fichier {file_path} n'a pas été trouvé.")
    except Exception as e:
        print(f"Erreur : {e}")

# Fonction principale pour exécuter le script
def main():
    print("=== Récupération des projets GitHub et ajout ===")
    projects = fetch_github_projects(GITHUB_USERNAME)
    if projects:
        add_project_to_file(file_path, projects)
    else:
        print("Aucun projet à ajouter.")

if __name__ == "__main__":
    main()
