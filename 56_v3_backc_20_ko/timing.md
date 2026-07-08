# v3_backc_20_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누구시냐? 호빗에 나오는 갈색 마법사는 누구예요?
     2.94s  agent 발화 시작: <ret> 그렇구나. 라다가스트는 중간계의 마법사이고, *호빗*과 *반지의 제왕* 둘 다에 등장해. 다른 이
     2.94s  <ret> 발화 (turn1 첫 프레임)
     2.94s  user  발화 끝
     3.50s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.96s]: Radagast the Brown is a wizard in J.R.R. Tolkien’s Middle-earth, appea
    11.27s  user  발화 시작: 네.
    11.27s  agent 발화 끝
    11.76s  agent 발화 시작: 걔는 인간이나 엘프들보다 동물, 특히 새들과 어울리는 걸 더 좋아해.
    11.76s  user  발화 끝
    16.66s  user  발화 시작: 음.
    16.66s  agent 발화 끝
    17.15s  agent 발화 시작: 혼자 있는 걸 좋아하는 사람이야. 큰 회의나 전략에는 별로 관심이 없지만, 마음은 착하대.
    17.15s  user  발화 끝
    23.52s  user  발화 시작: 걔는 정확히 뭘 하는 사람이예요?
    23.52s  agent 발화 끝
    25.97s  agent 발화 시작: <ret> 그렇지. 걔는 일종의 수호자야. 라다가스트는 중간계의 짐승들과 새들을 돌보는 일을 주로 해. 다른
    25.97s  <ret> 발화 (turn7 첫 프레임)
    25.97s  user  발화 끝
    26.97s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.45s]: Radagast the Brown is primarily concerned with the care of beasts and 
    35.76s  user  발화 시작: 그럼 숲을 지키는 레인저 같은 건가요?
    35.76s  agent 발화 끝
    38.70s  agent 발화 시작: [laugh] 좀 더 기발한 레인저일지도. 완전히 틀린 비교는 아니야. 걔는 야생 동물들을 지켜보잖아.
    38.70s  user  발화 끝
    45.07s  user  발화 시작: 걔는 힘이 세요?
    45.07s  agent 발화 끝
    46.54s  agent 발화 시작: 힘이 있긴 하지. 하지만 간달프나 사루만의 힘과는 좀 달라. 지배보다는 양육에 집중하는 부드러운 힘이라고 해
    46.54s  user  발화 끝
    54.38s  agent 발화 끝
