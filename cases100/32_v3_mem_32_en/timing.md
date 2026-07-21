# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Quinn",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "medication",
#       "text": "User takes a daily thyroid medication."
#     },
#     {
#       "date": "2026-05-02",
#       "category": "car",
#       "text": "User drives a 2022 Volkswagen Golf."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "partner",
#       "text": "User's partner is named Elena."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "dish",
#       "text": "User's go-to comfort dish is butter chicken."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "work",
#       "text": "User works as a veterinarian."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "emergency",
#       "text": "User's emergency contact is Emma."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-21",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-03-21",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Jora, thanks. I’m really strugg | S2 That’s true. Actually, do you reme | S3 Wow, that’s amazing! Okay, let’s b | S4 Like… what kind of routines?

     0.00s  agent 발화 시작: Hi Quinn, I'm Jora. It’s good to connect with you. I'm a lif
     5.64s  agent 발화 끝
     6.77s  user  발화 시작: Hi Jora, thanks. I’m really struggling with some big changes
    11.04s  agent 발화 시작: Change can be unsettling, absolutely. It’s like waves—they b
    11.14s  user  발화 끝
    13.06s  user  발화 시작: Yeah.
    13.63s  user  발화 끝
    16.31s  agent 발화 끝
    16.57s  user  발화 시작: That’s a nice way to put it. It feels… overwhelming though.
    20.70s  agent 발화 시작: It's okay to feel overwhelmed. Allowing yourself to experien
    20.71s  user  발화 끝
    26.48s  agent 발화 끝
    26.80s  user  발화 시작: I keep replaying things in my head, what I should have done 
    30.83s  user  발화 끝
    31.13s  agent 발화 시작: That’s very common, Quinn. It’s easy to get caught in “what 
    34.31s  user  발화 시작: Right.
    34.98s  user  발화 끝
    35.38s  agent 발화 끝
    35.69s  user  발화 시작: I’m also worried about leaning on people, I don’t want to bo
    38.43s  agent 발화 시작: Uh-huh.
    39.06s  agent 발화 끝
    39.31s  agent 발화 시작: [happy] It's brave to acknowledge that. Support isn't a burd
    39.39s  user  발화 끝
    42.46s  user  발화 시작: Okay.
    43.05s  user  발화 끝
    43.98s  agent 발화 끝
    44.31s  user  발화 시작: I guess. It’s just hard to ask for help.
    46.98s  agent 발화 시작: It takes courage, yes. Remember Elena is there for you, as y
    47.03s  user  발화 끝
    48.44s  user  발화 시작: Mhm.
    48.88s  user  발화 끝
    51.28s  agent 발화 끝
    51.38s  user  발화 시작: That’s true. Actually, do you remember what we talked about 
    55.21s  <ret> 발화 (turn17 첫 프레임)
    55.63s  agent 발화 시작: <ret> You were exploring finding a therapist, and specifical
    55.76s  user  발화 끝
    56.18s  ⚡SPAN 주입 [d'=0.97s / d_lead=9.45s]: [2026-05-21] Past chat — Looking for a therapist: prefers evening vide
    65.08s  agent 발화 끝
    65.22s  user  발화 시작: Yes! Do you think you could find someone like that again?
    67.90s  <ret> 발화 (turn19 첫 프레임)
    69.51s  ⚡SPAN 주입 [d'=1.61s / d_lead=11.73s]: (tool result) {"providers": [{"name": "Dr. Anya Sharma", "specialty": 
    69.55s  user  발화 끝
    69.57s  agent 발화 시작: <ret> Dr. Anya Sharma specializes in Cognitive Behavioral Th
    81.30s  agent 발화 끝
    82.85s  user  발화 시작: That sounds perfect! —
    84.52s  user  발화 시작: …is she covered by my insurance, do you think?
    84.55s  user  발화 끝
    87.06s  user  발화 끝
    87.08s  <ret> 발화 (turn22 첫 프레임)
    87.16s  agent 발화 시작: <ret> Good news! Dr. Sharma accepts your insurance, with a c
    88.60s  ⚡SPAN 주입 [d'=1.52s / d_lead=9.13s]: (tool result) {"insurance coverage": "Accepted", "copay": "$30", "appo
    96.29s  agent 발화 끝
    96.76s  user  발화 시작: Wow, that’s amazing! Okay, let’s book it.
   101.02s  <ret> 발화 (turn24 첫 프레임)
   101.13s  agent 발화 시작: <ret> Excellent. Your appointment with Dr. Sharma is confirm
   101.16s  user  발화 끝
   101.88s  ⚡SPAN 주입 [d'=0.86s / d_lead=8.34s]: (tool result) {"confirmation number": "APP-789012", "status": "confirm
   104.51s  user  발화 시작: Yeah.
   105.27s  user  발화 끝
   109.47s  agent 발화 끝
   109.83s  user  발화 시작: Fantastic! That takes a load off my mind.
   112.82s  agent 발화 시작: [happy] I'm so glad to hear that, Quinn. Taking that step is
   112.91s  user  발화 끝
   117.26s  agent 발화 끝
   117.33s  user  발화 시작: I've also been having trouble sleeping lately.
   119.68s  agent 발화 시작: Sleep disturbances are often linked to periods of change and
   119.71s  user  발화 끝
   121.85s  user  발화 시작: Yeah.
   122.51s  user  발화 끝
   123.84s  agent 발화 끝
   123.92s  user  발화 시작: I know, but it's making everything feel worse.
   126.83s  user  발화 끝
   126.99s  agent 발화 시작: Gentle daily structure can be helpful. Small routines offer 
   132.08s  agent 발화 끝
   132.12s  user  발화 시작: Like… what kind of routines?
   134.41s  user  발화 끝
   134.90s  agent 발화 시작: Perhaps a consistent bedtime, or a calming activity before s
   140.04s  agent 발화 끝
   141.66s  user  발화 시작: I think I could try that. Maybe listening to music too.
   145.38s  agent 발화 시작: [curious] Music can be very soothing. Do you have a favorite
   145.40s  user  발화 끝
   149.17s  agent 발화 끝
   149.47s  user  발화 시작: I really love Ethiopian jazz.
   151.81s  agent 발화 시작: That sounds beautiful. It’s good to nurture yourself with th
   151.90s  user  발화 끝
   156.67s  agent 발화 끝
   158.53s  user  발화 시작: Thank you, Jora. This has been really helpful.
   160.81s  agent 발화 시작: [happy] You're very welcome, Quinn. Remember, I'm here to su
   160.88s  user  발화 끝
   165.38s  agent 발화 끝
