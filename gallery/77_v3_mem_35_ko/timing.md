# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "정영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-29",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-05-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 정영님! 저는 Klami예요. 오늘 하루는 어떠세요?
     2.42s  user  발화 시작: 응.
     2.83s  user  발화 끝
     5.10s  agent 발화 끝
     6.93s  user  발화 시작: 아, 안녕하세요. Klami님. 요즘 좀 바빠서 숨 돌릴 틈이 없네요.
    12.07s  user  발화 끝
    12.11s  agent 발화 시작: 바쁘신 와중에도 저를 찾아주셔서 감사합니다. 혹시 기분 전환할 만한 거라도 찾고 계신가요?
    14.85s  user  발화 시작: 응.
    15.34s  user  발화 끝
    19.66s  agent 발화 끝
    19.67s  user  발화 시작: 음… 여행이라도 가고 싶네요. 어디든 좋으니, 그냥 훌쩍 떠나고 싶어요.
    24.83s  <ret> 발화 (turn6 첫 프레임)
    24.99s  agent 발화 시작: <ret> 알프스 야생화 사진 촬영에 관심이 있으시군요. 스위스 융프라우 지역은 어떠세요? 칠월 말부터 팔월
    24.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: [2026-06-15] User is into alpine wildflower photography.
    25.14s  user  발화 끝
    29.80s  user  발화 시작: 어.
    30.25s  user  발화 끝
    33.60s  agent 발화 시작: 융프라우는 아름다운 야생화와 함께 멋진 알프스 풍경을 즐길 수 있는 곳이에요. 사진 찍기에도 정말 좋고요.
    33.75s  agent 발화 끝
    42.08s  agent 발화 끝
    43.46s  user  발화 시작: 스위스요? 좋죠. 혹시 전에 스위스 여행에 대해 말씀드린 적이 있나요?
    49.12s  <ret> 발화 (turn10 첫 프레임)
    49.35s  agent 발화 시작: <ret> 네, 이천이십육년 유월 십오일에 알프스 야생화 사진 촬영에 관심이 있다고 말씀하셨어요.
    49.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: [2026-06-15] User is into alpine wildflower photography.
    49.44s  user  발화 끝
    56.21s  agent 발화 끝
