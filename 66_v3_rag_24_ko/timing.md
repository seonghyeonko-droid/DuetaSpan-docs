# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "우서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-28",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 뒤플레시 이름이 어디에서 유래됐는지 궁금해요.
     3.02s  <ret> 발화 (turn1 첫 프레임)
     3.33s  agent 발화 시작: <ret> 뒤플레시 성은 프랑스 위그노 출신이며, '플레시에서 온'이라는 뜻을 가지고 있습니다.
     3.52s  user  발화 끝
     4.38s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.70s]: The surname Du Plessis is of French Huguenot origin, meaning "from Ple
     7.53s  user  발화 시작: 맞아요.
     8.16s  user  발화 끝
     9.03s  agent 발화 끝
     9.73s  user  발화 시작: 위그노가 뭔데요?
    10.51s  <ret> 발화 (turn4 첫 프레임)
    10.88s  agent 발화 시작: <ret> 위그노는 십육세기와 십칠세기 프랑스의 개신교도들로, 주로 칼뱅주의 신자였습니다. 가족사에 대해 이
    11.06s  user  발화 끝
    12.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.58s]: Huguenots were French Protestants in the 16th and 17th centuries, larg
    19.46s  agent 발화 끝
