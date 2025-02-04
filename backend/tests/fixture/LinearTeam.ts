import { linearMember } from "./LinearMembers";

export const linearTeam = {
  archivedAt: undefined,
  autoArchivePeriod: 3,
  autoClosePeriod: 6,
  autoCloseStateId: "test",
  createdAt: "2021-08-20T07:45:06.819Z",
  cycleCalenderUrl: "https://test.com/ical/test/cycles.ics",
  cycleCooldownTime: 0,
  cycleDuration: 3,
  cycleIssueAutoAssignCompleted: false,
  cycleIssueAutoAssignStarted: false,
  cycleLockToActive: false,
  cycleStartDay: 1,
  cyclesEnabled: true,
  defaultIssueEstimate: 1,
  defaultTemplateForMembersId: undefined,
  defaultTemplateForNonMembersId: undefined,
  description: undefined,
  groupIssueHistory: true,
  id: "test",
  inviteHash: "test",
  issueEstimationAllowZero: true,
  issueEstimationExtended: false,
  issueEstimationType: "fibonacci",
  issueOrderingNoPriorityFirst: true,
  key: "SIG",
  members: () => Promise.resolve(linearMember),
  name: "🔌 test name",
  private: false,
  slackIssueComments: true,
  slackIssueStatuses: true,
  slackNewIssue: true,
  timezone: "Australia/Melbourne",
  triageEnabled: false,
  upcomingCycleCount: 3,
  updatedAt: "2022-01-26T22:50:05.672Z",
  _activeCycle: { id: "test" },
  _defaultIssueState: { id: "test" },
  _draftWorkflowState: undefined,
  _markedAsDuplicateWorkflowState: undefined,
  _mergeWorkflowState: { id: "test" },
  _reviewWorkflowState: undefined,
  _startWorkflowState: { id: "test" },
  _triageIssueState: undefined,
};
