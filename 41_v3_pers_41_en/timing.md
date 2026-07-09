# v3_pers_41_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "연영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-28",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-06-27",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-06-23",
#       "category": "home",
#       "text": "User's home address is 685 Maple Drive."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-24",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Bir… that’s a beautiful name. It f | S2 But what if I *don’t* have potenti | S3 They don’t understand. They just w | S4 Other possibilities… like what? I 

     0.00s  agent 발화 시작: 연영, it’s lovely to connect with you. I’m Bir, and I offer su
     6.62s  user  발화 시작: Bir… that’s a beautiful name. It feels… gentle. Are you Kore
     6.86s  agent 발화 끝
    11.99s  agent 발화 시작: That’s kind of you to say. My name has roots in several cult
    12.08s  user  발화 끝
    20.29s  user  발화 시작: Oh. I— I mean, it’s okay. It’s just… Seoul can feel very iso
    20.42s  agent 발화 끝
    25.92s  user  발화 끝
    25.97s  agent 발화 시작: Seoul is a vibrant city, but it’s understandable to feel iso
    34.41s  agent 발화 끝
    34.65s  user  발화 시작: Um… it's just everything. I finished university, but I don’t
    39.04s  agent 발화 시작: That uncertainty after a significant chapter is very common.
    39.27s  user  발화 끝
    43.59s  user  발화 시작: Yeah, yeah.
    45.21s  user  발화 끝
    46.44s  agent 발화 시작: Often, we place a lot of pressure on ourselves to have it al
    46.55s  agent 발화 끝
    52.44s  user  발화 시작: Yeah.
    52.94s  user  발화 끝
    54.47s  agent 발화 끝
    55.34s  user  발화 시작: It feels like everyone else has a plan. My friends are all g
    60.41s  agent 발화 시작: Comparing ourselves to others can amplify those feelings of 
    60.54s  user  발화 끝
    64.89s  user  발화 시작: Yeah.
    65.39s  user  발화 끝
    68.29s  agent 발화 끝
    68.45s  user  발화 시작: But what if I *don’t* have potential? What if I’m just… stuc
    72.96s  agent 발화 시작: That's a very vulnerable question, and it takes courage to a
    73.03s  user  발화 끝
    78.05s  user  발화 시작: Mm-hmm.
    78.55s  user  발화 끝
    79.91s  agent 발화 끝
    79.91s  user  발화 시작: It’s more than doubt. It's like… a weight. Like I'm disappoi
    85.20s  user  발화 끝
    85.21s  agent 발화 시작: Expectations, both our own and those we perceive from others
    94.72s  user  발화 시작: My parents, I guess. They sacrificed a lot for my education.
    94.76s  agent 발화 끝
    98.97s  agent 발화 시작: It’s natural to feel a sense of obligation when others have 
    99.08s  user  발화 끝
   107.23s  user  발화 시작: But they keep asking about job interviews! It’s awful.
   107.41s  agent 발화 끝
   111.54s  user  발화 끝
   111.55s  agent 발화 시작: It sounds like their inquiries are adding to your stress—
   114.11s  user  발화 시작: They don’t understand. They just want me to be… successful.
   114.83s  agent 발화 끝
   117.62s  user  발화 끝
   117.63s  agent 발화 시작: Success is a very subjective term, isn’t it? What does *succ
   122.72s  user  발화 시작: Yeah.
   123.17s  user  발화 끝
   125.69s  agent 발화 끝
   125.78s  user  발화 시작: I… I don't know anymore. I used to want to be a designer, bu
   130.13s  user  발화 끝
   130.21s  agent 발화 시작: You used to have a clear vision. What changed that vision? W
   134.41s  user  발화 시작: Yeah.
   135.04s  user  발화 끝
   137.16s  user  발화 시작: I wasn’t good enough. My portfolio wasn’t strong enough to g
   137.53s  agent 발화 끝
   141.36s  agent 발화 시작: Rejection can be deeply discouraging. It’s easy to internali
   141.50s  user  발화 끝
   149.56s  agent 발화 끝
   149.56s  user  발화 시작: It just felt like… proof that I wasn’t meant to do it.
   152.97s  agent 발화 시작: Sometimes, a closed door isn't a sign of inadequacy, but an 
   153.03s  user  발화 끝
   159.07s  user  발화 시작: Other possibilities… like what? I feel so overwhelmed.
   159.45s  agent 발화 끝
   163.56s  user  발화 끝
   163.88s  agent 발화 시작: It’s alright to feel overwhelmed. Perhaps we could explore s
   167.35s  user  발화 시작: Yeah, yeah.
   168.83s  user  발화 끝
   171.29s  agent 발화 끝
   171.51s  user  발화 시작: [sigh] That sounds… exhausting.
   174.37s  agent 발화 시작: It’s understandable to feel hesitant when you're already dep
   174.60s  user  발화 끝
   183.18s  agent 발화 끝
   183.57s  user  발화 시작: Okay. Small steps. Maybe… just thinking about it?
   188.58s  agent 발화 시작: That’s a wonderful start. Simply allowing yourself space to 
   188.62s  user  발화 끝
   197.15s  agent 발화 끝
