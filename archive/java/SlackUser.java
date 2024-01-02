package archive.java;

import java.util.ArrayList;

/**
 * This class represents a user of the Slack messaging service. Create a new
 * `SlackUser` with a full name and display name and add other `SlackUsers` to
 * their team.
 * 
 * @author Paul Bokelman
 */
public class SlackUser {
    private String fullName;
    private String displayName;
    private ArrayList<SlackUser> teamMembers;

    /**
     * Create a new SlackUser with a full name and display name.
     * 
     * @param String fullName
     * @param String displayName
     * @return SlackUser
     */
    public SlackUser(String fullName, String displayName) {
        this.fullName = fullName;
        this.displayName = displayName;
        this.teamMembers = new ArrayList<SlackUser>();
    }

    /**
     * Get the full name of the user.
     * 
     * @return String
     */
    public String getFullName() {
        return this.fullName;
    }

    /**
     * Get the display name of the user.
     * 
     * @return String
     */
    public String getDisplayName() {
        return this.displayName;
    }

    /**
     * Add a team member (SlackUser) to this user's team.
     * 
     * @param SlackUser user
     * @return void
     */
    public void addTeamMember(SlackUser user) {
        this.teamMembers.add(user);
    }

    public static void main(String[] args) {
        SlackUser paul = new SlackUser("Paul Bokelman", "paulb");
        SlackUser linus = new SlackUser("Linus Torvalds", "ThePenguin");
        paul.addTeamMember(linus);
    }

}