# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "다서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 드랠. 연방 예산 발표 날짜는 누가 정하는 건가요 | S2 정치적인 이유라… 어떤 경우가 있었나요? | S3 그 보고서는 어디에서 볼 수 있나요? | S4 — 그런데, 예산 발표 전에 경제 전문가들의 의견을 듣는 절차

     0.00s  user  발화 시작: 안녕하세요, 드랠. 연방 예산 발표 날짜는 누가 정하는 건가요?
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.00s  <ret> 발화 (turn13 첫 프레임)
     0.03s  agent 발화 시작: 안녕하세요. 연방 예산 발표 날짜를 정하는 것은 재무부 장관입니다.
     0.03s  user  발화 끝
     0.06s  user  발화 시작: 아, 그렇군요. 혹시 최근에 예산 발표 날짜가 변경된 적이 있나요?
     0.06s  agent 발화 끝
     0.06s  <ret> 발화 (turn11 첫 프레임)
     0.09s  agent 발화 시작: <ret> 예산 발표 날짜는 이천십칠년 이월 일일로 앞당겨졌습니다, 정부가 예산안을 실행할 시간을 더 확보하
     0.09s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: The date of the Union Budget presentation in India has been advanced f
     0.09s  user  발화 끝
     0.13s  user  발화 시작: 이천십칠년이요? 그 전에는 언제였죠?
     0.13s  agent 발화 끝
     0.14s  agent 발화 시작: 예산 발표 날짜는 이천십칠년 이월 일일로 변경되기 전에는 이월의 마지막 날이었습니다.
     0.14s  user  발화 끝
     0.17s  user  발화 시작: 음… 그 날짜를 정하는 특별한 이유가 있었나요?
     0.17s  agent 발화 끝
     0.20s  agent 발화 시작: 예산안을 실행하기 위해 정부에 더 많은 시간을 주기 위해서였어요.
     0.20s  user  발화 끝
     0.22s  user  발화 시작: [curious] 혹시 예산 발표가 늦어지는 경우도 있나요?
     0.22s  agent 발화 끝
     0.24s  <ret> 발화 (turn16 첫 프레임)
     0.25s  agent 발화 시작: 예산 발표가 늦어진 경우는 거의 없지만, 정치적인 이유나 경제 상황 때문에 미뤄진 적은 있습니다.
     0.25s  user  발화 끝
     0.29s  user  발화 시작: 정치적인 이유라… 어떤 경우가 있었나요?
     0.29s  agent 발화 끝
     0.30s  agent 발화 시작: <ret> 천구백구십칠년에는 연합 정부가 무너진 후의 정치적 불안정 때문에 예산 발표가 지연되었습니다.
     0.30s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: In 1997, the Union Budget presentation was delayed due to the politica
     0.30s  user  발화 끝
     0.34s  user  발화 시작: 아, 그렇군요. 그럼 가장 최근 예산 발표는 언제였죠?
     0.34s  agent 발화 끝
     0.36s  <ret> 발화 (turn20 첫 프레임)
     0.36s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 세시 십칠분입니다.
     0.36s  ⚡SPAN 주입 [d'=0.02s / d_lead=0.02s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
     0.36s  user  발화 끝
     0.39s  user  발화 시작: 네.
     0.39s  agent 발화 끝
     0.39s  user  발화 시작: [sigh] 오늘 날씨는 어때요?
     0.39s  user  발화 끝
     0.40s  agent 발화 시작: <ret> 서울의 현재 날씨는 섭씨 이십팔 점 삼도, 습도는 육십팔퍼센트, 바람은 시속 사 점 일킬로미터입니
     0.40s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) 28.3°C, humidity 68%, wind 4.1 km/h
     0.40s  user  발화 끝
     0.41s  <ret> 발화 (turn29 첫 프레임)
     0.44s  user  발화 시작: 꽤 덥네요. 혹시 예산 발표 전에 경제 전망을 발표하나요?
     0.44s  agent 발화 끝
     0.47s  agent 발화 시작: 네, 예산 발표 전에 경제 전망 보고서를 발표합니다.
     0.47s  user  발화 끝
     0.50s  user  발화 시작: 그 보고서는 어디에서 볼 수 있나요?
     0.50s  agent 발화 끝
     0.52s  agent 발화 시작: <ret> 경제 전망 보고서는 인도 정부 재무부에서 발표하며, 재무부 공식 웹사이트 www.indiabudg
     0.52s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: The Economic Survey is released by the Ministry of Finance, Government
     0.52s  user  발화 끝
     0.56s  user  발화 시작: 웹사이트 주소가 꽤 길네요.
     0.56s  agent 발화 끝
     0.57s  agent 발화 시작: 네, 조금 길긴 하죠. 그래도 중요한 정보를 얻을 수 있는 곳이니까요.
     0.57s  user  발화 끝
     0.60s  user  발화 시작: 혹시 예산 발표에 영향을 미치는 국제적인 요인이 있나요?
     0.60s  agent 발화 끝
     0.63s  agent 발화 시작: 세계 경제 상황, 국제 유가, 환율 등이 예산 발표에 영향을 미칠 수 있습니다.
     0.63s  user  발화 끝
     0.67s  user  발화 시작: 국제 유가요? 유가가 오르면 예산에 어떤 영향을 미치나요?
     0.67s  agent 발화 끝
     0.69s  agent 발화 시작: 유가가 오르면 수입 물가가 상승하고, 이는 경제 전반에 영향을 미쳐 예산에 부담을 줄 수 있습니다.
     0.69s  user  발화 끝
     0.74s  user  발화 시작: — 그런데, 예산 발표 전에 경제 전문가들의 의견을 듣는 절차가 있나요?
     0.74s  agent 발화 끝
     0.77s  user  발화 시작: … 혹시 예산 발표 전에 경제 전문가들이랑 논의하는 과정이 있는지 궁금해요.
     0.77s  user  발화 끝
     0.81s  agent 발화 시작: <ret> 정부는 예산안을 수립하기 전에 다양한 이해 관계자들과 논의를 진행합니다. 예산 발표 전 협의에는 
     0.81s  user  발화 끝
     0.83s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: The pre-budget consultations involve meetings with economists, industr
     0.90s  user  발화 시작: 네네.
     0.90s  agent 발화 끝
     0.91s  user  발화 시작: 아, 그렇군요. 그럼 그 전문가들의 의견이 예산에 얼마나 반영되나요?
     0.91s  user  발화 끝
     0.94s  agent 발화 시작: 전문가들의 의견은 예산안에 직접적으로 반영되지는 않지만, 정부는 그들의 의견을 참고하여 예산안을 조정합니다.
     0.94s  user  발화 끝
     0.97s  user  발화 시작: [happy] 좋은 정보 감사합니다, 드랠.
     0.97s  agent 발화 끝
     0.99s  agent 발화 시작: 천만에요. 도움이 되었다니 기쁩니다.
     0.99s  user  발화 끝
     1.00s  agent 발화 끝
