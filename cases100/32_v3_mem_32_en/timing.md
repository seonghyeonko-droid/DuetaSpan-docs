# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Sam",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-22",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "medication",
#       "text": "User takes a statin."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "diet",
#       "text": "User is dairy-free."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "skill",
#       "text": "User is getting fairly good at home fermentation."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "allergy",
#       "text": "User is allergic to bee stings."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-30",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Fae, nice to meet you too. I’m  | S2 I want it to be fun, definitely. N | S3 Okay, so how do I tell which is wh | S4 I’m also worried about my health w

     0.00s  agent 발화 시작: Hi Sam, I'm Fae. It’s lovely to meet you.
     2.96s  agent 발화 끝
     3.65s  user  발화 시작: Hi Fae, nice to meet you too. I’m feeling really overwhelmed
     7.67s  user  발화 끝
     7.70s  agent 발화 시작: Wedding planning can be a lot! We can break it down. What fe
    13.81s  agent 발화 끝
    14.31s  user  발화 시작: I’m stuck choosing between two venues. I mentioned them befo
    17.26s  <ret> 발화 (turn4 첫 프레임)
    17.87s  agent 발화 시작: <ret> You were comparing two venues for a wedding next May, 
    17.92s  user  발화 끝
    18.53s  ⚡SPAN 주입 [d'=1.27s / d_lead=4.21s]: [2026-05-14] Past chat — Planning a wedding: guest list around 80 peop
    22.08s  agent 발화 끝
    22.25s  user  발화 시작: Right! And I can’t decide. One is more formal, the other mor
    26.32s  user  발화 끝
    26.43s  agent 발화 시작: A formal versus relaxed vibe is a key difference. What’s imp
    32.41s  agent 발화 끝
    32.48s  user  발화 시작: I want it to be fun, definitely. Not stuffy.
    35.02s  agent 발화 시작: Fun is great! Let’s focus on what makes a wedding feel fun t
    35.06s  user  발화 끝
    41.59s  user  발화 시작: Well, good music is essential. And I want people to be comfo
    41.78s  agent 발화 끝
    45.43s  agent 발화 시작: Good music and comfort are excellent starting points. Consid
    45.43s  user  발화 끝
    50.22s  user  발화 시작: …Actually, before we dive deeper into the venues, do you hav
    50.94s  agent 발화 끝
    56.66s  user  발화 끝
    56.68s  agent 발화 시작: That’s a very common feeling when planning something big. Ur
    65.91s  agent 발화 끝
    67.31s  user  발화 시작: Okay, so how do I tell which is which?
    69.43s  user  발화 끝
    69.47s  agent 발화 시작: A good method is the Eisenhower Matrix: categorize tasks as 
    72.79s  user  발화 시작: Mm-hmm.
    73.28s  user  발화 끝
    79.95s  agent 발화 끝
    79.96s  user  발화 시작: That sounds helpful. I think a lot of my tasks feel both urg
    84.76s  agent 발화 시작: That’s often the case! In those situations, prioritize based
    84.91s  user  발화 끝
    87.36s  user  발화 시작: Yeah.
    87.85s  user  발화 끝
    92.54s  agent 발화 끝
    92.71s  user  발화 시작: I guess creating a memorable experience for our guests.
    95.07s  agent 발화 시작: Yeah.
    95.66s  agent 발화 끝
    96.33s  agent 발화 시작: [happy] That's a wonderful priority! Focusing on guest exper
    96.42s  user  발화 끝
    99.61s  user  발화 시작: Right.
   100.05s  user  발화 끝
   103.42s  agent 발화 끝
   104.51s  user  발화 시작: I’m also worried about my health with all this stress. I tak
   108.33s  <ret> 발화 (turn24 첫 프레임)
   108.63s  agent 발화 시작: <ret> I recall you take a statin. Managing stress is vital w
   108.76s  user  발화 끝
   109.36s  ⚡SPAN 주입 [d'=1.03s / d_lead=4.67s]: [2026-05-07] User takes a statin.
   111.75s  user  발화 시작: Mm-hmm.
   112.39s  user  발화 끝
   113.22s  user  발화 시작: Yeah, I don't want to forget doses either.
   113.31s  agent 발화 끝
   115.29s  user  발화 끝
   115.63s  agent 발화 시작: Perhaps adding medication reminders to your schedule could h
   119.66s  agent 발화 끝
