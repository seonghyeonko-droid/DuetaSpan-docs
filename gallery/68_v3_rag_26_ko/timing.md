# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "하빈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아시아 넥스트 탑모델 시즌 오 우승자가 누구였지? 갑자기 기억 | S2 아, 김진규! 기억난다. 근데 그때 심사위원들은 누구였지? | S3 혹시 다른 아시아 넥스트 탑모델 우승자들도 궁금해. | S4 생각보다 덥네.

     0.00s  user  발화 시작: 아시아 넥스트 탑모델 시즌 오 우승자가 누구였지? 갑자기 기억이 안 나네.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.00s  <ret> 발화 (turn7 첫 프레임)
     0.03s  agent 발화 시작: <ret> 아시아 넥스트 탑모델 시즌 오의 우승자는 이천십칠년 유월 이십팔일에 발표된 모린 브로블레비츠였습니
     0.03s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Maureen Wroblewitz was announced as the winner of Asia’s Next Top Mode
     0.03s  user  발화 끝
     0.09s  user  발화 시작: 맞아, 좀 힘든 일이 있어서. 근데 그 모델, 필리핀 출신이지?
     0.09s  agent 발화 끝
     0.12s  <ret> 발화 (turn18 첫 프레임)
     0.12s  agent 발화 시작: <ret> 모린 브로블레비츠는 필리핀과 독일 혼혈 모델이자 미인 대회 출신입니다. 천구백구십칠년 이월 이십이
     0.12s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: Maureen Wroblewitz is a Filipino-German model and beauty queen. She wa
     0.12s  user  발화 끝
     0.14s  <ret> 발화 (turn10 첫 프레임)
     0.15s  <ret> 발화 (turn13 첫 프레임)
     0.17s  user  발화 시작: 아, 그렇구나. 혹시 다른 참가자들도 궁금해지네.
     0.17s  agent 발화 끝
     0.18s  agent 발화 시작: 다른 참가자들에 대해 더 알고 싶으신가요? 혹시 특정 참가자를 염두에 두고 계신가요?
     0.18s  user  발화 끝
     0.22s  user  발화 시작: 음… 시즌 오에 한국 대표가 있었던가?
     0.22s  agent 발화 끝
     0.24s  agent 발화 시작: <ret> 시즌 오에 한국 대표로 김진규 씨가 참가했습니다. 육화에서 탈락했어요.
     0.24s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: Kim Jin-kyu represented South Korea in Asia’s Next Top Model season 5.
     0.24s  user  발화 끝
     0.27s  user  발화 시작: 와.
     0.27s  agent 발화 끝
     0.27s  user  발화 시작: 아, 김진규! 기억난다. 근데 그때 심사위원들은 누구였지?
     0.27s  user  발화 끝
     0.30s  agent 발화 시작: <ret> 아시아 넥스트 탑모델 시즌 오의 심사위원은 신디 비숍, 카라 괴를렉, 몬티 아이솜 씨였습니다. 공
     0.30s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) The judges for Asia’s Next Top Model season 5 were Cindy
     0.30s  user  발화 끝
     0.36s  user  발화 시작: 신디 비숍! 역시. 근데—
     0.36s  agent 발화 끝
     0.37s  user  발화 시작: …혹시 모린 브로블레비츠는 지금 뭐 하고 살까?
     0.37s  user  발화 끝
     0.39s  agent 발화 시작: <ret> 현재 모델 활동을 이어가며 다양한 브랜드와 협업하고 있으며, 이천이십삼년 십일월 기준으로 인스타그
     0.39s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Maureen Wroblewitz continues to work as a model and has collaborated w
     0.39s  user  발화 끝
     0.44s  user  발화 시작: 응응.
     0.44s  agent 발화 끝
     0.45s  user  발화 시작: 인스타 팔로워가 그렇게 많아? 대단하다.
     0.45s  user  발화 끝
     0.46s  agent 발화 시작: 네, 인기가 정말 많으신 것 같아요. 모델로서 성공적인 커리어를 쌓아가고 계시네요.
     0.46s  user  발화 끝
     0.50s  user  발화 시작: 혹시 다른 아시아 넥스트 탑모델 우승자들도 궁금해.
     0.50s  agent 발화 끝
     0.52s  agent 발화 시작: <ret> 아시아 넥스트 탑모델 우승자는 한시즌 제시카 아몬쿨린(태국), 두시즌 네팔의 안잘리 라마, 세시즌
     0.52s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) The winners of Asia’s Next Top Model are: Season 1 – Jes
     0.52s  user  발화 끝
     0.63s  user  발화 시작: 이야, 필리핀이 우승을 많이 했네.
     0.63s  agent 발화 끝
     0.64s  agent 발화 시작: 네, 필리핀 출신 모델들이 아시아 넥스트 탑모델에서 강세를 보이는 것 같아요.
     0.64s  user  발화 끝
     0.66s  <ret> 발화 (turn25 첫 프레임)
     0.68s  user  발화 시작: 응.
     0.68s  agent 발화 끝
     0.68s  user  발화 시작: 다른 모델 프로그램도 비슷한가?
     0.68s  user  발화 끝
     0.69s  agent 발화 시작: 다른 모델 프로그램들도 국가별로 강세를 보이는 경향이 있는 것 같아요.
     0.69s  user  발화 끝
     0.69s  <ret> 발화 (turn31 첫 프레임)
     0.72s  user  발화 시작: 오늘 날씨는 어때? 갑자기 궁금해졌어.
     0.72s  agent 발화 끝
     0.74s  agent 발화 시작: <ret> 현재 서울의 날씨는 섭씨 이십삼도이고, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터입니다.
     0.74s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) Current weather in Seoul: 23.0°C, humidity 74%, wind 5.5
     0.74s  user  발화 끝
     0.78s  user  발화 시작: 진짜?
     0.78s  agent 발화 끝
     0.78s  user  발화 시작: 생각보다 덥네.
     0.78s  user  발화 끝
     0.79s  agent 발화 시작: 네, 오늘 서울은 꽤 더울 것 같아요. 시원한 물 많이 드시고 건강 유의하세요.
     0.79s  user  발화 끝
     0.83s  user  발화 시작: 그래.
     0.83s  agent 발화 끝
     0.83s  user  발화 시작: 혹시 이번 주말에 영화 볼만한 거 있어?
     0.83s  user  발화 끝
     0.85s  agent 발화 시작: <ret> 현재 서울에서 상영 중인 영화는 “인사이드 아웃 이”, “배드 보이즈: 라이드 오어 다이”, “가
     0.85s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Currently showing movies in Seoul include “Inside Out 2”
     0.85s  user  발화 끝
     0.92s  user  발화 시작: 인사이드 아웃 이는 봤는데, 좋더라.
     0.92s  agent 발화 끝
     0.94s  agent 발화 시작: 네, “인사이드 아웃 이”는 많은 분들이 재미있다고 하시는 것 같아요.
     0.94s  user  발화 끝
     0.97s  user  발화 시작: 그럼 다른 거 찾아봐야겠다.
     0.97s  agent 발화 끝
     0.98s  agent 발화 시작: 네, 다른 영화도 찾아보시는 건 어떠세요?
     0.98s  user  발화 끝
     1.00s  agent 발화 끝
