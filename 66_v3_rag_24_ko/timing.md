# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "우서",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-21",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "home",
#       "text": "User's home address is 609 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-21",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 뒤플레시 가문이 어디에서 유래되었는지 궁금해요. 성씨 이름이 독특하거든요.
     5.40s  <ret> 발화 (turn1 첫 프레임)
     5.71s  agent 발화 시작: <ret> 프랑스 이름이라는 것을 알고 계셨나요?
     5.79s  user  발화 끝
     6.44s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.77s]: [source: Britannica] The name Du Plessis is of French origin, derived 
     8.27s  agent 발화 시작: 뒤플레시 성씨는 프랑스에서 유래되었는데, “뒤”는 “~의”라는 뜻이고 “플레시”는 작은 숲이나 울타리가 있는
     8.48s  agent 발화 끝
    14.81s  user  발화 시작: 아.
    15.44s  user  발화 끝
    16.86s  user  발화 시작: 아, 프랑스 성씨군요! 그럼 프랑스 귀족 가문이었던 건가요?
    17.04s  agent 발화 끝
    21.93s  <ret> 발화 (turn5 첫 프레임)
    22.00s  agent 발화 시작: <ret> 뒤플레시 가문은 프랑스 귀족 가문 중에서도 특히 중요한 역할을 했었어요.
    22.19s  user  발화 끝
    23.84s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.70s]: [source: Wikipedia] The House of Du Plessis was a French noble family,
    27.66s  agent 발화 시작: 뒤플레시 가문은 프랑스 왕을 섬기면서 십삼세기부터 두각을 나타낸 프랑스 귀족 가문이었답니다.
    27.70s  agent 발화 끝
    35.21s  agent 발화 끝
    35.33s  user  발화 시작: 음, 그렇군요. 혹시 그 가문 출신으로 유명한 사람이 있나요?
    40.22s  <ret> 발화 (turn8 첫 프레임)
    40.60s  agent 발화 시작: <ret> 뒤플레시 가문 출신 중에선 프랑수아 뒤플레시가 가장 유명한 인물이에요. 그는 프랑스의 원수였거든요
    40.79s  user  발화 끝
    42.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: [source: Historic UK] François du Plessis, Marquis de Richelieu, was a
    48.48s  agent 발화 끝
    48.49s  agent 발화 시작: 프랑수아
    49.30s  agent 발화 끝
