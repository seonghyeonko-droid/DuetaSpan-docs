# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Hannah",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-10",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-21",
#       "category": "home",
#       "text": "User's home address is 197 Oak Avenue."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I am looking for a pharmacy near t | S2 Wow, it is. Could you find… | S3 …me some good Italian restaurants  | S4 Oh, that’s okay. Just tell me abou

     0.00s  user  발화 시작: I am looking for a pharmacy near thirty-three point four fou
    14.66s  user  발화 끝
    14.72s  <ret> 발화 (turn1 첫 프레임)
    14.80s  agent 발화 시작: <ret> It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul r
    14.80s  ⚡SPAN 주입 [d'=1.68s / d_lead=8.53s]: (tool result) It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul rig
    18.09s  user  발화 시작: Yeah.
    18.58s  user  발화 끝
    23.12s  user  발화 시작: Wow, it is. Could you find…
    23.33s  agent 발화 끝
    25.52s  user  발화 끝
    26.72s  user  발화 시작: …me some good Italian restaurants nearby?
    30.45s  <ret> 발화 (turn5 첫 프레임)
    30.47s  user  발화 끝
    30.69s  agent 발화 시작: <ret> I’m sorry, I couldn’t find any Italian restaurants nea
    30.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: (no information found)
    34.66s  user  발화 시작: Yeah, yeah.
    36.08s  user  발화 끝
    37.37s  user  발화 시작: Oh, that’s okay. Just tell me about yourself, Tumi.
    37.55s  agent 발화 끝
    40.74s  user  발화 끝
    40.84s  agent 발화 시작: [happy] I'm Tumi, and I love helping people plan their time 
    50.72s  agent 발화 끝
