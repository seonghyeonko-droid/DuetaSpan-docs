# v3_inter_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어디서 끝나는지 궁금하구나. 진짜 말이 많아서 뭐가 뭔지 모르겠어.
     3.43s  <ret> 발화 (turn1 첫 프레임)
     3.89s  user  발화 끝
     4.03s  agent 발화 시작: <ret> 뭐, 생각보다 복잡한 질문이야.
     4.43s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.10s]: The Great Wall of China stretches over ten thousand li, ending at Lop 
     8.94s  agent 발화 시작: 가장 서쪽 끝은 로프 호수라는 데 있어.
     9.13s  agent 발화 끝
    10.26s  user  발화 시작: 로프 호수? 처음 들어보는데. 거기가 어때?
    10.41s  agent 발화 끝
    13.67s  <ret> 발화 (turn4 첫 프레임)
    14.24s  agent 발화 시작: <ret> 솔직히 좀 황량한 곳이야.
    14.38s  user  발화 끝
    14.67s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.26s]: Lop Lake is a salt lake located in the Taklamakan Desert, Gansu Provin
    16.35s  agent 발화 시작: 엄청 외딴 곳이지. 로프 호수는 중국 간쑤성에 있는 타클라마칸 사막 안에 있어. 환경이 엄청 험해.
    16.51s  agent 발화 끝
    19.65s  user  발화 시작: 타클라마칸 사막… 뭔가… 엄청 매섭겠는데. 아직도 호수 근처에 남아 있어?
    19.91s  agent 발화 끝
    22.55s  user  발화 끝
    22.58s  agent 발화 시작: 로프 호수 근처 부분은—
    27.72s  user  발화 시작: 근데 *보이는* 거야? 진짜로 거기서 벽이 *끝나는* 걸 볼 수 있어?
    28.42s  agent 발화 끝
    29.92s  <ret> 발화 (turn9 첫 프레임)
    30.16s  ⚡SPAN 주입 [d'=0.24s / d_lead=1.57s]: Erosion and sandstorms have significantly damaged the wall’s remains n
    30.52s  agent 발화 시작: <ret> 좋은 질문이다. 로프 호수 근처 벽은 침식이랑 모래 폭풍 때문에 많이 망가졌어. 안타깝게도 대부분
    30.68s  user  발화 끝
    36.32s  user  발화 시작: 어, 진짜? 그럼 거의… 폐허만 남은 거야? 좀 슬프네.
    36.40s  agent 발화 끝
    37.75s  agent 발화 시작: 시간의 힘을 보여주는 슬픈 장면이지, 그렇지? 사실 얼음 조각에서도 비슷한 걸 봤어.
    37.92s  user  발화 끝
    43.95s  agent 발화 끝
