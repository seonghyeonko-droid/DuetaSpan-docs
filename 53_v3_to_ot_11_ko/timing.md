# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "정준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-10",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-08-20",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-27",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 농구에서 통산 스틸 일위가 누구야? | S2 그럼 그 다음 스틸 이위는 누구야? | S3 …그 선수도 엄청 유명하잖아, 키드! 지금은 코치로 활동하고  | S4 혹시 스탁턴 선수랑 키드 선수 스틸 차이가 얼마나 나지?

     0.00s  user  발화 시작: 음… 농구에서 통산 스틸 일위가 누구야?
     2.68s  <ret> 발화 (turn1 첫 프레임)
     2.90s  user  발화 끝
     2.92s  agent 발화 시작: <ret> 농구 통산 스틸 일위는 존 스탁턴 선수인데, 총 삼천이백육십오개의 스틸을 기록하고 은퇴했답니다.
     2.92s  ⚡SPAN 주입 [d'=1.60s / d_lead=6.90s]: John Stockton retired as the NBA's all-time leader in steals with 3,26
     8.20s  user  발화 시작: 응.
     8.55s  user  발화 끝
     9.82s  agent 발화 끝
    10.15s  user  발화 시작: 와, 엄청 많네.
    11.44s  agent 발화 시작: 네, 정말 대단한 기록이죠. 꾸준함이 얼마나 중요한지 보여주는 것 같아요.
    11.62s  user  발화 끝
    16.59s  user  발화 시작: 그럼 그 다음 스틸 이위는 누구야?
    16.62s  agent 발화 끝
    18.55s  <ret> 발화 (turn6 첫 프레임)
    18.87s  agent 발화 시작: <ret> 두 번째로 많은 스틸을 기록한 선수는 제이슨 키드 선수인데 —
    18.87s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.37s]: Jason Kidd is second all-time in NBA steals with 2,684.
    19.03s  user  발화 끝
    21.62s  user  발화 시작: …그 선수도 엄청 유명하잖아, 키드! 지금은 코치로 활동하고 있대.
    22.25s  agent 발화 끝
    25.97s  user  발화 끝
    26.32s  agent 발화 시작: 네, 맞아요. 제이슨 키드 선수는 총 이천육백팔십사개의 스틸을 기록했답니다.
    31.51s  agent 발화 끝
    31.63s  agent 발화 시작: 지금은 코치로 활동하고 계시죠. 농구에 대한 열정이 대단하신 분 같아요.
    36.44s  agent 발화 끝
    37.20s  user  발화 시작: 혹시 스탁턴 선수랑 키드 선수 스틸 차이가 얼마나 나지?
    40.52s  user  발화 끝
    40.64s  <ret> 발화 (turn11 첫 프레임)
    40.72s  agent 발화 시작: <ret> 스탁턴 선수와 키드 선수의 스틸 개수 차이는 총 오백팔십일개랍니다.
    40.72s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.72s]: The difference between John Stockton and Jason Kidd’s steals is 581.
    45.45s  agent 발화 끝
