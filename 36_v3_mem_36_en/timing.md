# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Julia",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Heaon, nice to meet you too. I' | S2 Exactly. And it's not just the mon | S3 Oh, right! Yes, I remember mention | S4 Very excited! But also a little an

     0.00s  agent 발화 시작: Hi Julia, I'm Heaon. It's lovely to meet you. I'm a counselo
     7.48s  user  발화 시작: Hi Heaon, nice to meet you too. I'm feeling a bit overwhelme
     7.48s  agent 발화 끝
    13.46s  agent 발화 시작: Yeah, totally.
    13.46s  user  발화 끝
    14.21s  agent 발화 시작: I understand. Family dynamics can be complex. What's been ha
    14.21s  agent 발화 끝
    19.07s  user  발화 시작: Well, she keeps borrowing money and never paying it back. It
    19.07s  agent 발화 끝
    23.94s  agent 발화 시작: Yeah, totally.
    23.94s  user  발화 끝
    24.69s  agent 발화 시작: That sounds frustrating. It's common for financial issues to
    24.69s  agent 발화 끝
    31.42s  user  발화 시작: I've tried, but she gets really upset and says I'm not being
    31.42s  agent 발화 끝
    36.28s  agent 발화 시작: It's tough when setting boundaries elicits that response. Pe
    36.28s  user  발화 끝
    43.76s  user  발화 시작: That would be great. It feels like I'm always walking on egg
    43.76s  agent 발화 끝
    48.25s  agent 발화 시작: [curious] Walking on eggshells is exhausting. It sounds like
    48.25s  user  발화 끝
    54.61s  user  발화 시작: Yeah.
    54.61s  agent 발화 끝
    54.98s  user  발화 시작: Exactly. And it's not just the money, it’s everything. She e
    54.98s  user  발화 끝
    60.96s  agent 발화 시작: It's understandable you feel overwhelmed if that pattern has
    60.96s  user  발화 끝
    69.94s  user  발화 시작: Hmm, I think it started after our mother passed away. She re
    69.94s  agent 발화 끝
    74.80s  agent 발화 시작: [sigh] Grief can profoundly shift relationships. It's natura
    74.80s  user  발화 끝
    82.66s  user  발화 시작: Yeah, and I fell into the role of caretaker. I just want thi
    82.66s  agent 발화 끝
    88.64s  agent 발화 시작: Yeah, yeah.
    88.64s  user  발화 끝
    89.26s  <ret> 발화 (turn18 첫 프레임)
    89.39s  agent 발화 시작: <ret> I do recall noting you work as a nurse, Julia, which o
    89.39s  agent 발화 끝
    90.28s  ⚡SPAN 주입 [d'=1.01s / d_lead=6.36s]: [2026-06-21] User works as a nurse.
    95.75s  user  발화 시작: Oh, right! Yes, I remember mentioning that. It’s a very cari
    95.75s  agent 발화 끝
   100.24s  agent 발화 시작: Mhm.
   100.24s  user  발화 끝
   100.61s  agent 발화 시작: It is. And sometimes that caring can extend into personal li
   100.61s  agent 발화 끝
   106.97s  user  발화 시작: That's so true. I feel guilty even thinking about setting li
   106.97s  agent 발화 끝
   111.08s  agent 발화 시작: Right.
   111.08s  user  발화 끝
   111.11s  <ret> 발화 (turn24 첫 프레임)
   111.46s  agent 발화 시작: <ret> I also see you have a Beagle named Rusty. Animals can 
   111.46s  agent 발화 끝
   111.95s  ⚡SPAN 주입 [d'=0.84s / d_lead=5.61s]: [2026-04-07] User has a Beagle named Rusty.
   117.07s  user  발화 시작: Yes, Rusty is my little shadow! He’s a great listener, even 
   117.07s  agent 발화 끝
   123.43s  agent 발화 시작: [laugh] That's lovely. Sometimes just having a non-judgmenta
   123.43s  user  발화 끝
   128.66s  user  발화 시작: Yeah.
   128.66s  agent 발화 끝
   129.04s  user  발화 시작: I'm also planning a trip to Vietnam in October, do you remem
   129.04s  user  발화 끝
   133.47s  <ret> 발화 (turn29 첫 프레임)
   133.52s  agent 발화 시작: <ret> Yes, I have a note that you’re planning a trip to Viet
   133.52s  user  발화 끝
   134.56s  ⚡SPAN 주입 [d'=1.08s / d_lead=7.11s]: [2025-12-14] User is planning a trip to Vietnam in October.
   140.63s  user  발화 시작: Very excited! But also a little anxious about the logistics.
   140.63s  agent 발화 끝
   144.37s  agent 발화 시작: Uh-huh.
   144.37s  user  발화 끝
   144.74s  agent 발화 시작: It’s normal to feel both excitement and anxiety when plannin
   144.74s  agent 발화 끝
   152.22s  user  발화 시작: Yeah.
   152.22s  agent 발화 끝
   152.60s  user  발화 시작: That would be helpful. I’m worried about getting sick while 
   152.60s  user  발화 끝
   156.60s  <ret> 발화 (turn35 첫 프레임)
   157.09s  agent 발화 시작: <ret> [curious] That’s a valid concern. Are you vegan, Julia
   157.09s  user  발화 끝
   157.15s  ⚡SPAN 주입 [d'=0.55s / d_lead=3.37s]: [2026-05-05] User is vegan.
   160.45s  agent 발화 시작: I see you are vegan, which may present some dietary challeng
   160.45s  agent 발화 끝
   165.31s  user  발화 시작: Yes, it can be tricky finding vegan options. I'm a bit worri
   165.31s  agent 발화 끝
   170.55s  user  발화 끝
