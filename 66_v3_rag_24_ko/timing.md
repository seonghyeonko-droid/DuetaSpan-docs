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

# EXAMINER(FDB-v2) 단계: S1 뒤플레시 가문 이름이 어디에서 유래했는지 궁금해요. | S2 아, 그렇군요. 그럼 그 지명은 어떤 곳이었나요? | S3 혹시 유명한 뒤플레시 가문 사람이 있었나요? | S4 오, 리슐리외요! 역사 시간에 배웠던 것 같아요.

     0.00s  user  발화 시작: 뒤플레시 가문 이름이 어디에서 유래했는지 궁금해요.
     3.79s  <ret> 발화 (turn1 첫 프레임)
     4.10s  agent 발화 시작: <ret> 뒤플레시라는 성은 프랑스에서 유래했는데, 원래는 '드 플레시'였대요.
     4.30s  user  발화 끝
     5.15s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.70s]: [source: Britannica] The surname Du Plessis is of French origin, deriv
     9.62s  agent 발화 시작: 뒤플레시 성은 '플레시'라는 지명에서 비롯된 '드 플레시'라는 프랑스어 표현에서 유래했다고 해요.
     9.80s  agent 발화 끝
    14.23s  user  발화 시작: 아.
    14.86s  user  발화 끝
    15.75s  user  발화 시작: 아, 그렇군요. 그럼 그 지명은 어떤 곳이었나요?
    15.92s  agent 발화 끝
    18.99s  <ret> 발화 (turn5 첫 프레임)
    19.06s  agent 발화 시작: <ret> 프랑스에는 플레시라는 이름을 가진 곳이 여러 군데 있었어요. 프랑스에는 작은 영지나 저택과 관련된
    19.27s  user  발화 끝
    20.91s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.56s]: [source: Forebears] There were several places named Plessis in France,
    29.31s  agent 발화 끝
    29.73s  user  발화 시작: 혹시 유명한 뒤플레시 가문 사람이 있었나요?
    32.62s  <ret> 발화 (turn7 첫 프레임)
    33.02s  agent 발화 시작: <ret> 네, 프랑스의 카르디널이자 정치가인 리슐리외가 뒤플레시 가문 출신이에요.
    33.19s  user  발화 끝
    34.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.78s]: [source: Wikipedia] Cardinal Richelieu, a prominent French clergyman a
    38.71s  agent 발화 시작: 리슐리외 추기경은 아르망 장 뒤플레시라는 이름으로 태어난 프랑스의 유명한 성직자이자 정치가였어요.
    38.80s  agent 발화 끝
    47.01s  agent 발화 끝
    47.71s  user  발화 시작: 오, 리슐리외요! 역사 시간에 배웠던 것 같아요.
    51.55s  user  발화 끝
    51.73s  agent 발화 시작: 맞아요, 리슐리외는 프랑스 역사에서 아주 중요한 인물이죠.
    56.21s  agent 발화 끝
