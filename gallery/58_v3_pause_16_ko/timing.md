# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "채슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-08-30",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 아시안 게임에서 인도팀이… | S2 아니, 금메달만 몇 개인지 궁금한… | S3 …거예요. 다시 한 번만 알려주세요. | S4 꽤 많이 땄네요.

     0.00s  user  발화 시작: 음… 아시안 게임에서 인도팀이…
     2.40s  user  발화 끝
     3.83s  user  발화 시작: …이천십팔년에 금메달을 몇 개 땄더라…?
     5.62s  <ret> 발화 (turn2 첫 프레임)
     6.03s  agent 발화 시작: <ret> 이천십팔년 아시안 게임에서 인도팀은 총 예순아홉개의 메달을 획득했는데, 그중 금메달은 열여섯개였어
     6.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.93s]: India won a total of 69 medals at the 2018 Asian Games, including 16 g
     6.22s  user  발화 끝
    11.62s  user  발화 시작: 정말요?
    12.26s  user  발화 끝
    13.86s  agent 발화 시작: 혹시 다른 메달 종류에 대해서도 궁금하신가요?
    13.95s  agent 발화 끝
    17.10s  agent 발화 끝
    17.26s  user  발화 시작: 아니, 금메달만 몇 개인지 궁금한…
    19.65s  user  발화 끝
    20.64s  user  발화 시작: …거예요. 다시 한 번만 알려주세요.
    22.85s  user  발화 끝
    22.89s  agent 발화 시작: 이천십팔년 아시안 게임에서 인도팀은 금메달을 열여섯개 땄습니다.
    27.98s  agent 발화 끝
    28.01s  user  발화 시작: 아, 열여섯개였구나… 그럼 은메달은 몇 개였죠?
    31.25s  user  발화 끝
    31.34s  <ret> 발화 (turn9 첫 프레임)
    31.50s  agent 발화 시작: <ret> 이천십팔년 아시안 게임에서 인도팀은 금메달 열여섯개와 함께 은메달 스물세개, 동메달 서른개를 획득
    31.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.45s]: India won a total of 69 medals at the 2018 Asian Games, including 16 g
    36.81s  user  발화 시작: 진짜요?
    37.44s  user  발화 끝
    40.89s  user  발화 시작: 꽤 많이 땄네요.
    40.95s  agent 발화 끝
    41.79s  agent 발화 시작: 네, 정말 대단한 성과였죠. 스포츠 정신이 빛나는 결과인 것 같아요.
    41.89s  user  발화 끝
    46.79s  agent 발화 끝
