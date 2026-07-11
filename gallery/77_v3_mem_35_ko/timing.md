# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "성별",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-11-19",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 성별님. 저는 우라입니다. 오늘 하루는 어떠셨어요?
     4.03s  agent 발화 끝
     4.31s  user  발화 시작: 어… 안녕하세요. 요즘 좀 바빠서 정신이 없네요.
     8.56s  user  발화 끝
     8.70s  agent 발화 시작: 바쁘신 와중에도 저를 찾아주셔서 감사합니다. 혹시 저에게 도움을 요청하시려는 특별한 이유가 있으신가요?
    16.10s  user  발화 시작: 음… 이탈리아 음식을 좋아하잖아요. 혹시 부산에서 분위기 좋은 이탈리아 레스토랑 추천해 줄 수 있어요?
    16.26s  agent 발화 끝
    22.53s  <ret> 발화 (turn4 첫 프레임)
    22.68s  agent 발화 시작: <ret> 이탈리아 음식을 좋아하시는군요. 성별님께 딱 맞는 곳을 찾아드릴게요. 부산에는 분위기 좋은 이탈리
    22.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: User's favorite cuisine is Italian.
    22.87s  user  발화 끝
    29.25s  user  발화 시작: 음.
    29.75s  user  발화 끝
    32.60s  user  발화 시작: 오, 정말요? 어디가 제일 좋을까요?
    32.65s  agent 발화 끝
    35.62s  <ret> 발화 (turn7 첫 프레임)
    35.69s  agent 발화 시작: <ret> "라 돌체 비타"라는 곳이 평점이 사 점 오에 가격대도 괜찮다고 하네요. 해운대구 동백로 십에 위
    35.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: (tool result) {"restaurants": [{"name": "La Dolce Vita", "address": "해
    35.84s  user  발화 끝
    44.22s  agent 발화 끝
