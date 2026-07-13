# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Theo",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-12",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "home",
#       "text": "User's home address is 342 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Area, good to meet you too. I’m | S2 …actually, before we start, could  | S3 Okay, doing that. In… two… three…  | S4 Yes, please. What does that involv

     0.00s  agent 발화 시작: Hi Theo, I’m Area. It's lovely to meet you.
     3.32s  user  발화 시작: Hi Area, good to meet you too. I’m feeling pretty stressed l
     3.32s  agent 발화 끝
     7.75s  agent 발화 시작: [happy] I understand, Theo. Stress is very common. Perhaps w
     7.75s  user  발화 끝
    14.02s  user  발화 시작: Sure, that sounds good. What do I do?
    14.02s  agent 발화 끝
    16.98s  agent 발화 시작: Close your eyes, if you’re comfortable, and breathe in deepl
    16.98s  user  발화 끝
    22.88s  user  발화 시작: …actually, before we start, could you remind me what we talk
    22.88s  agent 발화 끝
    29.85s  <ret> 발화 (turn6 첫 프레임)
    29.89s  agent 발화 시작: <ret> You were asking about mesh routers for your three-stor
    29.89s  user  발화 끝
    30.57s  ⚡SPAN 주입 [d'=0.71s / d_lead=5.17s]: [2026-03-03] Past chat — Setting up a home network: asked about mesh r
    35.06s  user  발화 시작: Okay.
    35.06s  agent 발화 끝
    35.43s  user  발화 시작: Oh, right! That’s it. Thanks for reminding me.
    35.43s  user  발화 끝
    38.38s  agent 발화 시작: You're very welcome, Theo. Now, back to the breathing. Breat
    38.38s  user  발화 끝
    45.03s  user  발화 시작: Yeah.
    45.03s  agent 발화 끝
    45.40s  user  발화 시작: Okay, doing that. In… two… three… four.
    45.40s  user  발화 끝
    47.98s  agent 발화 시작: [curious] Excellent. Now, hold your breath for a moment, and
    47.98s  user  발화 끝
    54.62s  user  발화 시작: Yeah.
    54.62s  agent 발화 끝
    54.99s  user  발화 시작: Holding… and out… two… three… four… five… six. That feels… c
    54.99s  user  발화 끝
    59.42s  agent 발화 시작: [happy] That’s wonderful to hear, Theo. Repeating this a few
    59.42s  user  발화 끝
    69.38s  user  발화 시작: Yes, please. What does that involve?
    69.38s  agent 발화 끝
    71.60s  agent 발화 시작: It’s about connecting with the present moment using your sen
    71.60s  user  발화 끝
    78.61s  user  발화 시작: Okay, let me look around…
    78.61s  agent 발화 끝
    80.46s  user  발화 끝
