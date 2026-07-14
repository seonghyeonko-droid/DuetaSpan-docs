# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "현담",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 23°C."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "streaming",
#       "text": "User subscribes to Netflix and Spotify."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "schedule",
#       "text": "User has rotating night shifts."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-25",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-01-14",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2025-12-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 플래시 첫 화가 언제 나왔는지 궁금해.
     2.49s  <ret> 발화 (turn1 첫 프레임)
     2.98s  agent 발화 시작: <ret> 플래시 첫 화는 이천십사년 시월 칠일에 씨 더블유 네트워크에서 “파일럿”이라는 제목으로 처음 방영
     2.98s  user  발화 끝
     3.13s  ⚡SPAN 주입 [d'=0.64s / d_lead=8.43s]: The first episode of The Flash, titled “Pilot,” premiered on October 7
    11.41s  agent 발화 끝
