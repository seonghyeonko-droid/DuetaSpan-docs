# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Kim",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-20",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Oreus, I was wondering about th | S2 That’s good to know. Is there a wa | S3 So, a blockage in the posterior de | S4 Okay, salmon and berries. Got it. 

     0.00s  user  발화 시작: Hi Oreus, I was wondering about the heart.
     2.91s  agent 발화 시작: Yeah, yeah.
     2.91s  user  발화 끝
     3.63s  agent 발화 시작: Hello! I'm happy to talk about the heart with you. Is there 
     3.63s  agent 발화 끝
    10.17s  user  발화 시작: Yes, actually. Where does the left coronary artery supply bl
    10.17s  agent 발화 끝
    14.17s  <ret> 발화 (turn5 첫 프레임)
    14.17s  agent 발화 시작: Right.
    14.17s  user  발화 끝
    14.48s  ⚡SPAN 주입 [d'=0.52s / d_lead=7.99s]: The left coronary artery supplies blood to the left ventricle and the 
    14.54s  agent 발화 시작: <ret> The left coronary artery supplies blood to the left ve
    14.54s  agent 발화 끝
    22.53s  user  발화 시작: Yeah, yeah.
    22.53s  agent 발화 끝
    23.26s  user  발화 시작: Oh, okay. And what about the right coronary artery?
    23.26s  user  발화 끝
    26.42s  <ret> 발화 (turn8 첫 프레임)
    26.52s  ⚡SPAN 주입 [d'=0.53s / d_lead=9.45s]: The right coronary artery supplies blood to the right atrium, right ve
    26.53s  agent 발화 시작: <ret> The right coronary artery supplies blood to the right 
    26.53s  user  발화 끝
    35.97s  user  발화 시작: Okay.
    35.97s  agent 발화 끝
    36.34s  user  발화 시작: That’s good to know. Is there a way to keep those arteries h
    36.34s  user  발화 끝
    41.06s  agent 발화 시작: Maintaining a heart-healthy lifestyle is key – diet, exercis
    41.06s  user  발화 끝
    46.88s  user  발화 시작: I try to exercise, but I struggle with stress. Any quick tip
    46.88s  agent 발화 끝
    51.24s  agent 발화 시작: [happy] Certainly. A simple grounding exercise can help. Foc
    51.24s  user  발화 끝
    58.14s  agent 발화 시작: …three you can hear, two you can smell, and one you can tast
    58.14s  agent 발화 끝
    62.86s  user  발화 시작: …Wait, does the interventricular septum have its own blood s
    62.86s  agent 발화 끝
    69.06s  <ret> 발화 (turn16 첫 프레임)
    69.35s  ⚡SPAN 주입 [d'=1.50s / d_lead=12.35s]: The interventricular septum receives blood supply primarily from both 
    69.41s  agent 발화 시작: <ret> The interventricular septum receives blood supply prim
    69.41s  user  발화 끝
    81.76s  user  발화 시작: So, a blockage in the posterior descending artery could stil
    81.76s  agent 발화 끝
    86.12s  agent 발화 시작: Yes, a blockage there could contribute to issues, though its
    86.12s  user  발화 끝
    93.75s  user  발화 시작: Mm-hmm.
    93.75s  agent 발화 끝
    94.11s  user  발화 시작: I see. What kind of diet is best for heart health?
    94.11s  user  발화 끝
    98.11s  agent 발화 시작: Exactly.
    98.11s  user  발화 끝
    98.28s  <ret> 발화 (turn22 첫 프레임)
    98.48s  agent 발화 시작: <ret> A heart-healthy diet emphasizes fruits, vegetables, wh
    98.48s  agent 발화 끝
    98.92s  ⚡SPAN 주입 [d'=0.64s / d_lead=11.26s]: A heart-healthy diet emphasizes fruits, vegetables, whole grains, lean
   109.74s  user  발화 시작: Uh-huh.
   109.74s  agent 발화 끝
   110.10s  user  발화 시작: That sounds…restrictive. Are there any foods that are partic
   110.10s  user  발화 끝
   114.83s  agent 발화 시작: [curious] There are! Foods rich in omega-3 fatty acids, like
   114.83s  user  발화 끝
   122.46s  user  발화 시작: Uh-huh.
   122.46s  agent 발화 끝
   122.82s  user  발화 시작: Okay, salmon and berries. Got it. What about sleep? Does tha
   122.82s  user  발화 끝
   127.91s  agent 발화 시작: Yeah.
   127.91s  user  발화 끝
   128.27s  agent 발화 시작: [sigh] Absolutely. Poor sleep can raise blood pressure and i
   128.27s  agent 발화 끝
   137.72s  user  발화 시작: Seven to nine hours… I really struggle to get that much.
   137.72s  agent 발화 끝
   141.72s  agent 발화 시작: Okay.
   141.72s  user  발화 끝
   142.08s  agent 발화 시작: It’s common. Establishing a regular sleep schedule and creat
   142.08s  agent 발화 끝
   150.44s  agent 발화 끝
